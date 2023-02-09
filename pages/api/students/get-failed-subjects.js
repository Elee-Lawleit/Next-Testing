import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { method } = req;

    if (method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { studentId } = req.query;

    console.log("STUDENT ID: ", studentId)

    if (studentId == "null" || studentId == "undefined") {
        return res.status(403).json({ error: "Please fill in all the fields" });
    }

    const failedsubjects = await prisma.failedsubject.findMany({
        where: {
            regNo: studentId
        },
    })

    await prisma.$disconnect();

    // console.log("Assoc students: ", students);

    return res.status(200).json({ failedsubjects })
}

export default handler;