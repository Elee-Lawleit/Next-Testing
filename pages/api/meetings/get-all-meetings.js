import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async(req, res) => {

    const {method} = req;
    if(method !== "GET"){
        return res.status(403).json({error: "Method not allowed"});
    }

    const {dayString, userId, userRole} = req.query;
    

    

    const meetings = await prisma.$queryRaw`SELECT m.reason, m.status, m."regNo", m."parentId", m.date, m.mid, m."referedTo", t."startTime", t."endTime", a.generalavail, m."adminId"
                                         FROM meeting m, timeslot t, admin a
                                         WHERE (m."regNo" = ${userId} 
                                                OR m."parentId" = ${userId} 
                                                OR m."adminId" = ${userId})
                                         AND m.tsid = t.tsid
                                         AND m."adminId" = a."cnic"`;

    // if(!meetings.Meeting.length) return res.status(204).json();

  await prisma.$disconnect();
    
    return res.status(200).json({meetings});
  }

export default handler;