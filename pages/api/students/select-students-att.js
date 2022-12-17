import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { method } = req;

    if (method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { attendance } = req.query;

    if (!attendance) {
        return res.status(403).json({ error: "Please fill in the attendance field" });
    }

    let students = await prisma.attendance.findMany({
        where: {
            percentage: {lte: parseInt(attendance)}
        },
    })

    return res.status(200).json({ students })
}

export default handler;