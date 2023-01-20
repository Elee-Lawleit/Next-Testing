import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { method } = req;
    if (method !== "POST") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { timeslotId, status } = req.body;

    if (!timeslotId || status === undefined || status === null) {
        return res.status(403).json({ error: "please fill in all the fields" })
    }

    try {
        await prisma.timeslot.update({
            where: {
                tsid: timeslotId,
            },
            data: {
                availibility: status
            }
        });
        
    } catch (error) {
        return res.status(500).json({ message: "server error" });
    }

    await prisma.$disconnect();

    return res.status(200).json({ success: true });
};

export default handler;
