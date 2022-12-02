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

    //right now attendance is boolean and I don't want to reset my database

    //otherwise, of course it would check if

            /* where: {
                infoAttendance: {lte: Number(attendance)}
            } */

    let students = await prisma.studentInfo.findMany({
        where: {
            //Fix this later, convert the attendance datatype to integer in database and fix this API call
            infoAttendance: false
        },
        select: {
            Student: true
        }
    })

    // console.log("Students returend for attendance: ", students);

    return res.status(200).json({ students: students })
}

export default handler;