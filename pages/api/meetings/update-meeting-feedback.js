import { PrismaClient } from "prisma/src/generated/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const { method } = req;

        if (method !== "POST") {
            return res.status(405).json({
                error: "Method not allowed",
            });
        }

        // console.log(req.body);

        const { meetingId, feedback, rating } = req.body;

        // console.log("at back: ", meetingId, referal);

        if (!meetingId || !feedback || !rating) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        await prisma.history.update({
            where: {
                hid: meetingId
            },
            data:{
                feedback: feedback,
                rating: Number(rating)
            }
        })
 

        res.status(200).json({
            msg: "Meeting status update successful",
        });

        await prisma.$disconnect();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Server error.",
        });
    }
}
