import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }


    

    const { userId } = req.query;

    const meetings = await prisma.$queryRaw`SELECT count(mid)::int
                                         FROM meeting
                                         WHERE ("regNo" = ${userId} 
                                                OR "parentId" = ${userId} 
                                                OR "adminId" = ${userId}) 
                                         AND date = ${new Date()}::DATE`;

    // const meetings = await prisma.meeting.count({
    //     where: {
    //         OR: [
    //             {regNo: userId},
    //             {parentId: userId},
    //             {adminId: userId}
    //         ],
    //         date: new Date()
    //     }
    // })



    const count = meetings[0].count;

    await prisma.$disconnect();
    
    //well, the feature just came out, so
    return res.status(200).json({ count });

}


export default handler;