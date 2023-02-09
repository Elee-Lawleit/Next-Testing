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


        const { currentAdminId, oldTimeslotId, status, waitingListId } = req.body;

        if (!currentAdminId || !oldTimeslotId || !waitingListId || status == "undefined" || status == "null") {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }



        //find old timeslots details
        const oldTimeslot = await prisma.timeslot.findFirst({
            where: {
                tsid: Number(oldTimeslotId)
            }
        });

        const currentMeeting = await prisma.meeting.findFirst({
            where: {
                tsid: Number(oldTimeslotId)
            }
        })


        // find the exact same timeslot, but now from the admin that's calling the parent
        const newTimeslot = await prisma.timeslot.findFirst({
            where: {
                startTime: oldTimeslot.startTime,
                endTime: oldTimeslot.endTime,
                day: oldTimeslot.day,
                adminId: currentAdminId,
                meeting: null
            }
        })

        await prisma.waitinglist.update({
            where: {
                id: Number(waitingListId)
            },
            data: {
                tsid: newTimeslot.tsid,
                status: "confirmCall"
            }
        })

        await prisma.meeting.update({
            where: {
                mid: currentMeeting.mid
            },
            data: {
                tsid: Number(newTimeslot.tsid),
                adminId: currentAdminId,
                status: "confirmCall"
            }
        })


        res.status(200).json({
            msg: "Meeting status update successful",
        });

        await prisma.$disconnect();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Server error.",
        });
    }
}
