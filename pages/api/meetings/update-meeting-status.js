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

        const { meetingId, action } = req.body;

        // console.log("at back: ", meetingId, referal);

        if (!meetingId || !action) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        console.log(action);

        const id = Number(action);

        if(id){

            //free the time slot by setting avalibility to true
            await prisma.meeting.update({
                where:{
                    mid: id
                },
                data: {
                    timeslot: {
                        update: {
                            availibility: true
                        },
                    },
                }
            })

            // lock the new timeslot by setting availibility to true
            await prisma.timeslot.update({
                where: {
                    tsid: id
                },
                data: {
                    availibility: false
                }
            })

            //I wonder if this is possible in one query somehow 🤔, khair anyway

            //and then change the foreign key to new timeslot id
            await prisma.meeting.update({
                where:{
                    mid: meetingId,
                },
                data:{
                    tsid: id,
                    status: "pending"
                }
            })
        }
        else{
            await prisma.meeting.update({
                where: {
                    mid: meetingId
                },
                data: {
                    status: action
                }
            })

            if(action === "completed"){
                const data = await prisma.meeting.findFirst({
                    where:{
                        mid: meetingId
                    },
                    include:{
                        timeslot: true
                    }
                })

                await prisma.history.create({
                    data:{
                        date: data.timeslot.date,
                        startTime: data.timeslot.startTime,
                        endTime: data.timeslot.endTime,
                        reason: data.reason,
                        status: data.status,
                        referedTo: data.referedTo,
                        regNo: data.regNo,
                        adminId: data.adminId,
                        parentId: data.parentId,
                        feedback: "",
                        rating: 0
                    }
                })
            }
        }


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
