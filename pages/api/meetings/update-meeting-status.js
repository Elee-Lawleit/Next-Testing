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

        const { meetingId, action } = req.body;

        // console.log("at back: ", meetingId, referal);

        if (!meetingId || !action) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        await prisma.meeting.update({
            where: {
                mid: meetingId
            },
            data: {
                status: action
            }
        })


        res.status(200).json({
            msg: "Meeting status update successful",
        });
        prisma.$disconnect();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Server error.",
        });
    }
}
