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

        const {time, date } = req.body;


        //firs index of time array is old timeslot
        //use that to find the meeting, and then update it

        //also, update the adminId as well, not just the time
        //and date

        //last index is new timeslot

        const timeArray = time.split(",")

        if (!timeArray[0] || !timeArray[1] || !date) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }



        //old meeting id to get prev meeting details
        const prev = await prisma.meeting.findFirst({
            where:{
                tsid: Number(timeArray[0])
            }
        })



        //get new admin id
        const admin = await prisma.timeslot.findFirst({
          where:{
            tsid: Number(timeArray[1])
          },
          select:{
            adminId: true
          }
        })

        //update meetings with new details
        await prisma.meeting.update({
            where:{
                mid: Number(prev.mid)
            },
            data:{
             status: "pending",
             tsid: Number(timeArray[1]),
             adminId: admin.adminId   
            }
        })

        //delete from waiting list
        const waitId = await prisma.waitinglist.findFirst({
            where:{
                tsid: Number(timeArray[0])
            }, 
            select: {
                id: true
            }
        })

        await prisma.waitinglist.delete({
            where:{
                id: Number(waitId.id)
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
