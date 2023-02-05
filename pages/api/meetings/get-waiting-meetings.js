import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { userId } = req.query;


    // console.log("daystring: ", new Date(dayString))
    let meetings;

    //if parent is fetching the waiting list,
    //he should only see his own
    if(userId){
        meetings = await prisma.waitinglist.findMany({
            where:{
                parentId: userId
            }
        })
    }
    else{
         meetings = await prisma.waitinglist.findMany({})
    }

    // if(!meetings.Meeting.length) return res.status(204).json();

    await prisma.$disconnect();

    return res.status(200).json({ meetings });
}

export default handler;