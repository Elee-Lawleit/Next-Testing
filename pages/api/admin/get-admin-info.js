import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;

    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const info = await prisma.meeting.findMany({});

    let groupedItems = {};

    info.forEach(item => {
        if (!groupedItems[item.adminId]) {
            groupedItems[item.adminId] = [];
        }
        groupedItems[item.adminId].push(item);
    });

    console.log("grouped: ", groupedItems)

    // console.log("INFO: ", info)

    await prisma.$disconnect();

    return res.status(200).json({ groupedItems });
}

export default handler;