import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }


    

    const { userId } = req.query;

    const meetings = await prisma.$queryRaw`SELECT count(m.mid)::int
                                         FROM meeting m, timeslot t
                                         WHERE (m."regNo" = ${userId} 
                                                OR m."parentId" = ${userId} 
                                                OR m."adminId" = ${userId}) 
                                         AND t.date = ${new Date()}::DATE
                                         AND m.tsid = t.tsid`;

    // console.log("Meeting count is: ", meetings)

    const count = meetings[0].count;

    await prisma.$disconnect();
    
    //well, the feature just came out, so
    return res.status(200).json({ count });

}


export default handler;