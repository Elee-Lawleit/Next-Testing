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

    

    const { reason, time, assocRegno, userId, date } = req.body;

    

    const timeArray = time.split(",");

    

    const timeslot = await prisma.timeslot.findFirst({
        where: {
            startTime: timeArray[0],
            endTime: timeArray[1],
            adminId: timeArray[2],
            day: timeArray[3]
        },
        select: {
            tsid: true
        }
    });

    await prisma.meeting.create({
      data: {
        reason: reason,
        status: "pending",
        regNo: assocRegno,
        parentId: userId,
        adminId: timeArray[2],
        date: dayjs(date).add(5, "hour").toDate(),
        referedTo: "n/a",
        tsid: timeslot.tsid,
      },
    });

    // await prisma.timeslot.update({
    //   where: {
    //     tsid: timeslot.tsid,
    //   },
    //   data: {
    //     availibility: false,
    //   },
    // });

    res.status(200).json({
      msg: "Meeting created",
    });
    await prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error.",
    });
  }
}
