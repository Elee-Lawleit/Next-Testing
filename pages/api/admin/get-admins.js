import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    let admin = await prisma.admin.findMany({
        include: {
            timeslot: {
                include: {
                    meeting: true
                }
            }
        },
        where:{
            role: {notIn: ["director", "deputy director", "datacell"]}
        }
    })

    //return all free ones
    admin = admin.map((a, index)=>{
        a.timeslot = a.timeslot.filter((b)=>b.meeting === null)
        return a;
    });

    await prisma.$disconnect();

    // console.log("Admin and timeslots: ", admin);
    return res.status(200).json({ admin });
}

export default handler;