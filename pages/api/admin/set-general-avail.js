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

        // console.log(req.body);

        const { adminId, state } = req.body;

        if (!adminId || state === null || state === undefined) {

            console.log("amdinId:  ", adminId, " state: ", state)
            return res.status(403).json({ error: "Please fill in all the fields" })
        }

        await prisma.admin.update({
            where: {
               cnic: adminId
            },
            data: {
                generalavail: state
            }
        })

        res.status(200).json({
            msg: "Availibility updated successfully",
        });
        prisma.$disconnect();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Server error.",
        });
    }
}
