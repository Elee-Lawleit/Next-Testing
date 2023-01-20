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

    const { reason, time, assocRegno, adminId, userId } = req.body;

    console.log("Assoc reg no: ", assocRegno)

    const timeArray = time.split(",");

      const timeslot = await prisma.timeslot.findFirst({
          where: {
              startTime: new Date(timeArray[0]),
              endTime: new Date(timeArray[1]),
              date: dayjs(timeArray[2]).toDate(),
              adminId: adminId
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
