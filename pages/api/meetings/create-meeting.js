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

    const { reason, time, students, registrationNumber, userId, date } = req.body;

    console.log("reason: ", reason);
    console.log("time array: ", time)
    console.log("userId is; ", userId);
    console.log("reg no; ", registrationNumber);
    console.log("students: ", students)
    console.log("date: ", date)


    if (!reason || !time || (!registrationNumber && !students)) {
      return res.status(403).json({ error: "Please fill in all the fields" });
    }

    if (registrationNumber) {

      //getting the student
      const student = await prisma.student.findFirst({
        where: {
          regNo: registrationNumber
        }
      })

      const timeArray = time.split(",");

      // console.log("parentId is: ", parent.parent.cnic);

      const timeslot = await prisma.timeslot.findFirst({
        where: {
          startTime: new Date(timeArray[0]),
          endTime: new Date(timeArray[1]),
          day: timeArray[2],
          adminId: userId
        },
        select: {
          tsid: true
        }
      })

      // console.log("TimeSlot is: ", timeslot);

      await prisma.meeting.create({
        data: {
          reason: reason,
          status: "pending",
          regNo: registrationNumber,
          parentId: student.parentId,
          date: dayjs(date).add(5, "hour").toDate(),
          referedTo: "n/a",
          adminId: userId,
          tsid: timeslot.tsid
        }
      });

    }

    console.log("Students: ", students);

    let count = 0;
    let timeSlotsEnded = false;
    let ldate = date;

    if (students) {

      const timeArray = time.split(",");

      let startTime = dayjs(timeArray[0]).toDate();
      let endTime = dayjs(timeArray[1]).toDate();
      let anotherCount = 0;
      

      for (let i = 0; true; i++) {

        if(anotherCount === students.length) break;

        console.log("INSIDE FOR LOOP:")

        //getting the student
        const student = await prisma.student.findFirst({
          where: {
            regNo: students[i]
          }
        })


        const timeslot = await prisma.timeslot.findFirst({
          where: {
            startTime: new Date(timeArray[0]),
            endTime: new Date(timeArray[1]),
            day: timeArray[2],
            adminId: userId,
            // meeting: null
          },
          select: {
            tsid: true,
            availibility: true,
          },
        });

        console.log("timeslot: ", timeslot)


        //in case the timeslots end for the admin

        if (timeslot == null) {
          timeSlotsEnded = true;
          break;
        }

        count++;

        if (timeslot.availibility == false) {
          console.log("ts: ", timeslot)
          startTime = dayjs(startTime).add(15, "minute").toDate();
          endTime = dayjs(endTime).add(15, "minute").toDate();
          continue;
        }

        console.log("after getting false: ", timeslot)
        console.log("after getting false: ", students[i])

        await prisma.meeting.create({
          data: {
            reason: reason,
            status: "pending",
            regNo: students[i],
            parentId: student.parentId,
            adminId: userId,
            date: dayjs(ldate).add(5, "hour").toDate(),
            referedTo: "n/a",
            tsid: timeslot.tsid,
          },
        });

        anotherCount++;

        timeArray[0] = dayjs(timeArray[0]).add(15, 'minutes');
        timeArray[1] = dayjs(timeArray[1]).add(15, 'minutes');
        // ldate = dayjs(ldate).add(15, 'minutes').toDate;
      }

    }

    if (timeSlotsEnded === true) {
      res.status(200).json({
        msg: "free time slots ended",
        meetingsCreated: count
      })
    }

    res.status(200).json({
      msg: "Meeting created",
    });
    await prisma.$disconnect();
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error.",
    });
  }
}