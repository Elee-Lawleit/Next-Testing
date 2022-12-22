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

    const meetings = await prisma.$queryRaw`SELECT m.reason, m.status, m."regNo", m.mid
                                         FROM meeting m, timeslot t
                                         WHERE (m."regNo" = ${userId} 
                                                OR m."parentId" = ${userId} 
                                                OR m."adminId" = ${userId}) 
                                         AND t.date = ${new Date(dayString)}::DATE
                                         AND m.tsid = t.tsid`;

  await prisma.$disconnect();
  return res.status(200).json({meetings});
}

export default handler;