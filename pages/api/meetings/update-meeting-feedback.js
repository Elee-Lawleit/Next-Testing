import { PrismaClient } from "prisma/src/generated/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const { method } = req;

        if (method !== "POST") {
            return res.status(405).json({
                error: "Method not allowed",
            });
        }

        

        const { meetingId, suggesstion, rude, polite, attentive } = req.body;

        if (meetingId < 1 || suggesstion.length < 1 || rude < 1 || polite < 1 || attentive < 1) {
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        
        await prisma.feedback.create({
            data: {
                attentive: Number(attentive),
                polite: Number(polite),
                rude: Number(rude),
                suggestion: suggesstion,
                hid: meetingId
            }
        })


        res.status(200).json({
            msg: "Meeting feedback updated successfully",
        });

        await prisma.$disconnect();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Server error.",
        });
    }
}
