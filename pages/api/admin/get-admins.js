import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const admin = await prisma.admin.findMany({
        include: {
            meeting: {
                select: {
                    timeslot: true
                }
            },
            timeslot: {
                where: {
                    availibility: true,
                    date: {gte: new Date()}
                }
            }
        }
    })

    await prisma.$disconnect();

    // console.log("Admin and timeslots: ", admin);
    return res.status(200).json({ admin });
}

export default handler;