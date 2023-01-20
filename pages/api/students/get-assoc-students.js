import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { method } = req;

    if (method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { parentId } = req.query;

    if (!parentId) {
        return res.status(403).json({ error: "Please fill in all the fields" });
    }

    const students = await prisma.student.findMany({
        where: {
            parentId: parentId
        },
    })

    await prisma.$disconnect();

    // console.log("Assoc students: ", students);

    return res.status(200).json({ students })
}

export default handler;