import { PrismaClient } from "/prisma/src/generated/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { dayString, userId, userRole } = req.query;
    console.log("Date: ", typeof new Date(dayString));


    // console.log("daystring: ", new Date(dayString))

    const ratings = await prisma.history.findMany({
        where:{
            adminId: userId
        },
        select: {
            rating: true
        }
    })

    console.log(ratings)

    await prisma.$disconnect();
    return res.status(200).json({ ratings });
}

export default handler;