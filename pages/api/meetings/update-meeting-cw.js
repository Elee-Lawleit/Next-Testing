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

        const { meetingId, action, feedback } = req.body;

        console.log("id: ", meetingId, " action: ", action)
        console.log("feedback: ", feedback)

        if (!meetingId || !action) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        console.log("meetinID: ", meetingId);


        //meetingId constains an arrays when the action is "waiting"
        //the 0 index is old tsid, the 1 index is wait id

        if (action === "waiting") {
            const meeting = await prisma.meeting.findFirst({
                where:{
                    tsid: meetingId[0]
                }
            })
            await prisma.waitinglist.update({
                where: {
                    id: meetingId[1]
                },
                data: {
                    status: action
                }
            })
            await prisma.meeting.update({
                where:{
                    mid: meeting.mid
                },
                data:{
                    status: "waiting"
                }
            })
        }
        else {
            const meeting = await prisma.meeting.findFirst({
                where: {
                    mid: Number(meetingId)
                },
                include: {
                    timeslot: true
                }
            })

            console.log("meetingasdasdasdfsad: ", meeting)

            let history = null;
            if (meeting) {
                if (action === "confirmWait") {
                    await prisma.waitinglist.create({
                        data: {
                            date: meeting.date,
                            reason: meeting.reason,
                            parentId: meeting.parentId,
                            status: action,
                            adminId: meeting.adminId,
                            regNo: meeting.regNo,
                            tsid: meeting.tsid
                        }
                    })

                    await prisma.meeting.update({
                        where:{
                            mid: meetingId
                        }, 
                        data:{
                            status: "confirmWait"
                        }
                    })
                    //delete meeting from meeting table
                    // await prisma.meeting.delete({
                    //     where: {
                    //         mid: Number(meetingId)
                    //     }
                    // })
                }
                if (action === "held") {
                    console.log("feedback: ", feedback)
                    if (feedback) {

                        console.log("feedback2: ", feedback)

                        history = await prisma.history.create({
                            data: {
                                date: meeting.date,
                                startTime: meeting.timeslot.startTime,
                                endTime: meeting.timeslot.endTime,
                                reason: meeting.reason,
                                status: "completed",
                                referedTo: meeting.referedTo,
                                regNo: meeting.regNo,
                                adminId: meeting.adminId,
                                parentId: meeting.parentId,
                                adminFeedback: feedback,

                            }
                        })

                        await prisma.meeting.delete({
                            where:{
                                mid: Number(meetingId)
                            }
                        })

                        console.log("HISTORU: ", history)
                    }
                }
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


//     if(action === "completed"){
        //         const data = await prisma.meeting.findFirst({
        //             where:{
        //                 mid: meetingId
        //             },
        //             include:{
        //                 timeslot: true
        //             }
        //         })

        //         await prisma.history.create({
        //             data:{
        //                 date: data.timeslot.date,
        //                 startTime: data.timeslot.startTime,
        //                 endTime: data.timeslot.endTime,
        //                 reason: data.reason,
        //                 status: data.status,
        //                 referedTo: data.referedTo,
        //                 regNo: data.regNo,
        //                 adminId: data.adminId,
        //                 parentId: data.parentId,
        //                 feedback: "",
        //                 rating: 0
        //             }
        //         })
        //     }
        // }