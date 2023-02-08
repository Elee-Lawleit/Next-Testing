import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { method } = req;
    if (method !== "POST") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { timeslotId, status, date } = req.body;

    if (!timeslotId || status === undefined || status === null) {
        return res.status(403).json({ error: "please fill in all the fields" })
    }

    console.log("DATE: ", date)

    try {
        await prisma.timeslot.update({
            where: {
                tsid: timeslotId,
            },
            data: {
                availibility: status
            }
        });

        let admin = await prisma.timeslot.findFirst({
            where: {
                tsid: Number(timeslotId)
            },
            select: {
                adminId: true
            }
        })

        if (status == false) {
            await prisma.leave.create({
                data: {
                    date: new Date(date),
                    tsid: Number(timeslotId),
                    adminId: admin.adminId
                }
            })
        }

    } catch (error) {
        return res.status(500).json({ message: "server error" });
    }

    await prisma.$disconnect();

    return res.status(200).json({ success: true });
};

export default handler;
