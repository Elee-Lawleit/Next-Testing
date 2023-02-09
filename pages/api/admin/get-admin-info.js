import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;

    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const info = await prisma.$queryRaw`SELECT "firstName", "lastName", "desgination", "cnic", "role"
    FROM admin where "role" not in ('Director')`;

    const completedMeetings = await prisma.$queryRaw`SELECT h."adminId", a."firstName", a."lastName", a."desgination", COUNT(*)::INT as meetings_attended
    FROM history h, admin a
    where h."adminId" = a.cnic
    GROUP BY h."adminId", a."firstName", a."lastName", a."desgination"`;

    const leaves = await prisma.$queryRaw`
        select l."adminId", a."firstName", a."lastName", a."desgination", COUNT(*)::INT as total_leaves
        FROM leave l, admin a
        where l."adminId" = a.cnic
        GROUP BY  l."adminId", a."firstName", a."lastName", a."desgination"
    `;

    console.log("INFO: ", info)
    console.log("Completed: ", completedMeetings)
    console.log("leaves: ", leaves)

    await prisma.$disconnect();

    return res.status(200).json({ info, leaves });
}

export default handler;