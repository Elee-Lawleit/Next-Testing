import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { userId } = req.query;

    const timeSlots = await prisma.timeslot.findMany({
        where: {
            adminId: userId,
            date: {gte: new Date()},
            availibility: true
        },
        select: {
            startTime: true,
            endTime: true,
            date: true
        }
    })

    // console.log("Timeslots: ", timeSlots);

    // if (!meetings.Meeting.length) return res.status(204).json();

    return res.status(200).json({ timeSlots });
}

prisma.$disconnect();

export default handler;