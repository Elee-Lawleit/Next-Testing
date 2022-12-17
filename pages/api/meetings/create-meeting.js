import { PrismaClient } from "prisma/src/generated/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { method } = req;

    if (method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    // console.log(req.body);

    const { reason, time, students, registrationNumber, userId } = req.body;

    // console.log(time)
    // console.log(typeof time[2])

    // console.log("userId is; ", userId);

    if (!reason || !time || (!registrationNumber && !students)) {
      return res.status(403).json({ error: "Please fill in all the fields" });
    }

    //finding out if it is parent creating the meeting or admin
    const role = await prisma.userlogin.findFirst({
      where:{
        OR:[
          {
            parentId: userId
          },
          {
            adminId: userId
          }
        ]
      },
      select:{
        role: true
      }
    })
    // console.log("Role is:", role)

    // will do this later, if needed
    // if(role.role === "Admin"){

    // }

    if (registrationNumber) {

      const parent = await prisma.student.findFirst({
        where: {
          regNo: registrationNumber,
        },
        select: {
          parent: {
            select: {
              cnic: true
            }
          }
        }
      });

      const timeArray = time.split(",");

      // console.log("parentId is: ", parent.parent.cnic);

      const timeslot = await prisma.timeslot.findFirst({
        where:{
          startTime: new Date(timeArray[0]),
          endTime: new Date(timeArray[1]),
          date: dayjs(timeArray[2]).toDate(),
          adminId: userId
        },
        select:{
          tsid: true
        }
      })

      // console.log("TimeSlot is: ", timeslot);

      await prisma.meeting.create({
        data: {
          reason: reason,
          status: "pending",
          regNo: registrationNumber,
          parentId: parent.parent.cnic,
          adminId: userId,
          referedTo: "n/a",
          tsid: timeslot.tsid
        }
      });

      await prisma.timeslot.update({
        where:{
          tsid: timeslot.tsid
        },
        data:{
          availibility: false
        }
      });
    }

    console.log("Students: ", students);
    
    let count = 0;
    let timeSlotsEnded = false;

    if (students) {
      
      const timeArray = time.split(",");

      for(let i = 0; i < students.length; i++){
        //get parent for every student
        const parent = await prisma.student.findFirst({
          where: {
            regNo: students[i],
          },
          select: {
            parent: {
              select: {
                cnic: true,
              },
            },
          },
        });

        const timeslot = await prisma.timeslot.findFirst({
          where: {
            startTime: new Date(timeArray[0]),
            endTime: new Date(timeArray[1]),
            date: dayjs(timeArray[2]).toDate(),
            adminId: userId,
          },
          select: {
            tsid: true,
            availibility: true,
          },
        });

        // console.log(timeslot)

        if(timeslot == null){
          timeSlotsEnded = true;
          break;
        }

        count++;

        if (timeslot.availibility == false) {
          console.log("ts: ", timeslot)
          continue;
        }

        console.log("after getting false", timeslot)

        await prisma.meeting.create({
          data: {
            reason: reason,
            status: "pending",
            regNo: students[i],
            parentId: parent.parent.cnic,
            adminId: userId,
            referedTo: "n/a",
            tsid: timeslot.tsid,
          },
        });

        await prisma.timeslot.update({
          where: {
            tsid: timeslot.tsid,
          },
          data: {
            availibility: false,
          },
        });

        timeArray[0] = dayjs(timeArray[0]).add(15, 'minutes');
        timeArray[1] = dayjs(timeArray[1]).add(15, 'minutes');
        timeArray[2] = dayjs(timeArray[2]).add(15, 'minutes');

      };
    }

    if(timeSlotsEnded === true){
      res.status(200).json({
        msg: "free time slots ended",
        meetingsCreated: count
      })
    }

    res.status(200).json({
      msg: "Meeting created",
    });
    prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error.",
    });
  }
}
