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

        const { meetingId, startTime, endTime, day, adminId } = req.body;

        if (!meetingId || startTime == null ||  endTime == null ||  day == null || !adminId) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        
        
        console.log(adminId)

        const timeslot = await prisma.timeslot.findFirst({
            where:{
                startTime: new Date(startTime),
                endTime: new Date(endTime),
                day: day,
                meeting: null,
                adminId: {
                    notIn: [adminId]
                }
            }
        })

        await prisma.meeting.update({
            where:{
                mid: Number(meetingId)
            },
            data:{
                tsid: timeslot.tsid,
                adminId: timeslot.adminId
            }
        })

        // const timeslot = await prisma.$queryRaw`
        //     select * from timeslot
        //     where "startTime" = ${new Date(startTime)}::Date
        //     and "endTime" = ${endTime}::Date
        //     and day = ${day}
        //     and "adminId" not in (${adminId})
        //     order by random()            
        // `;

        console.log("TS: ", timeslot)

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
