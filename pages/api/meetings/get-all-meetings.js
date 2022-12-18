import { PrismaClient } from "/prisma/src/generated/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

const handler = async(req, res) => {

    const {method} = req;
    if(method !== "GET"){
        return res.status(403).json({error: "Method not allowed"});
    }

    const {dayString, userId, userRole} = req.query;
    console.log("Date: ", typeof new Date(dayString));
    

    // console.log("daystring: ", new Date(dayString))

    const meetings = await prisma.$queryRaw`SELECT m.reason, m.status, m."regNo", m."parentId", m.mid, m."referedTo", t.date, t."startTime", t."endTime"
                                         FROM meeting m, timeslot t
                                         WHERE (m."regNo" = ${userId} 
                                                OR m."parentId" = ${userId} 
                                                OR m."adminId" = ${userId})
                                         AND m.tsid = t.tsid`;
        // var meetings = await prisma.meeting.findMany({
        //     where: {
        //         OR:[
        //             {
        //                 regNo: userId
        //             },
        //             {
        //                 parentId: userId
        //             },
        //             {
        //                 adminId: userId
        //             }
        //         ],
        //     },
        //     include:{
        //         timeslot: {
        //             is: {
        //                 date: new Date(dayString)
        //             }
        //         }}
        // })

        // let meetings = await prisma.timeslot.findFirst({
        //     where : {
        //         date: new Date(dayString)
        //     },
        //     select : {
        //         meeting: {
        //             where: {
        //                 OR: [
        //                     {
        //                         regNo: userId
        //                     },
        //                     {
        //                         parentId: userId
        //                     },
        //                     {
        //                         adminId: userId
        //                     }
        //                 ],
        //             }
        //         }
        //     }
        // })
    
    

    // console.log("Meetings are: ", meetings);

    // if(!meetings.Meeting.length) return res.status(204).json();

  return res.status(200).json({meetings});
}


export default handler;