import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;

    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const info = await prisma.$queryRaw`SELECT m."adminId", a."firstName", a."lastName", a."desgination", COUNT(*)::INT as meetings_attended
    FROM meeting m, admin a
    where m."adminId" = a.cnic
    GROUP BY m."adminId", a."firstName", a."lastName", a."desgination"`;

    const leaves = await prisma.$queryRaw`
        select l."adminId", a."firstName", a."lastName", a."desgination", COUNT(*)::INT as total_leaves
        FROM leave l, admin a
        where l."adminId" = a.cnic
        GROUP BY  l."adminId", a."firstName", a."lastName", a."desgination"
    `;

    console.log("INFO: ", info)
    console.log("leaves: ", leaves)

    await prisma.$disconnect();

    return res.status(200).json({ info, leaves });
}

export default handler;