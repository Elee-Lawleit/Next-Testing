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

        const { time, date } = req.body;
        
        const timeArray = time.split(",")
        
        if(!timeArray[0] || !timeArray[1] || !date){
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        const oldMid = timeArray[0];
        const newTimeslotId = timeArray[1];

        await prisma.meeting.update({
            where: {
                mid: Number(oldMid)
            },
            data:{
                //free old timeslot
                timeslot:{
                    update:{
                        availibility: true
                    }
                },
            }
        })

        await prisma.meeting.update({
            where:{
                mid: Number(oldMid)
            },
            data: {
                tsid: Number(newTimeslotId),
                date: dayjs(date).add(5, "hour").toDate()
            }
        })

        await prisma.timeslot.update({
            where:{
                tsid: Number(newTimeslotId)
            },
            data: {
                availibility: false
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
