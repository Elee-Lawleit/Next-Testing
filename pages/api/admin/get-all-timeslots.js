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
            date: { gte: new Date() },
        },
        select: {
            startTime: true,
            endTime: true,
            date: true,
            availibility: true,
            tsid: true,
            meeting: true,
        },
        orderBy: [
           { date: 'asc'},
           {startTime: 'asc'}
        ]
        
    })

    const timeSlots = timeslots.filter((ts)=>ts.meeting==null)

    // console.log("Timeslots: ", timeSlots);

    // if (!meetings.Meeting.length) return res.status(204).json();

    await prisma.$disconnect();

    return res.status(200).json({ timeSlots });
}

export default handler;