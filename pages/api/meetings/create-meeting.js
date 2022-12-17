import { PrismaClient } from "prisma/src/generated/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { method } = req;

    if (method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    console.log(req.body);

    const { date, reason, time, students, registrationNumber } = req.body;

    // console.log(date, reason, time)

    if (!date || !reason || !time) {
      return res.status(403).json({ error: "Please fill in all the fields" });
    }

    console.log("Time is: ", time + "\t" + "And type is: ", typeof time)

    if (registrationNumber) {

      const parentId = await prisma.student.findFirst({
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
      })

      console.log("parentId is: ", parentId);

    //   await prisma.meeting.create({
    //     data: {
    //       reason: reason,
    //       status: "pending",
    //       regNo: registrationNumber,
    //       parentId: ,
    //     },
    //   });
    }

    if (students) {
      students.forEach(async () => {
        await prisma.meeting.create({
          data: {
            meetingDay: date,
            meetingStartTime: time[0],
            meetingEndTime: time[1],
            meetingStatus: false,
            meetingReason: reason,
            parentId: 2,
            studentId: 1,
          },
        });
      });
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