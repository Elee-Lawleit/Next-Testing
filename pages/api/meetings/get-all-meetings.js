import { PrismaClient } from "/prisma/src/generated/client";
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

    // if(!meetings.Meeting.length) return res.status(204).json();

  await prisma.$disconnect();
    
    return res.status(200).json({meetings});
  }

export default handler;