import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { userId } = req.query;

    const timeslots = await prisma.timeslot.findMany({
        where: {
            adminId: userId,
        },
        select: {
            startTime: true,
            endTime: true,
            day: true,
            availibility: true,
            tsid: true,
            meeting: true
        },
    })

    // if (!meetings.Meeting.length) return res.status(204).json();

    await prisma.$disconnect();

    return res.status(200).json({ timeslots });
}

export default handler;