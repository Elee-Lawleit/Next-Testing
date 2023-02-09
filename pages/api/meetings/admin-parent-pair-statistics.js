import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const pairStats = await prisma.$queryRaw`SELECT  m1.*, m2.total_meetings, a."firstName", a."lastName"
FROM history m1
LEFT JOIN (
  SELECT "adminId" AS admin, "parentId" AS parent, count(*)::INT AS total_meetings
  FROM history
  GROUP BY "adminId", "parentId"
) m2 ON m1."adminId" = m2.admin AND m1."parentId" = m2.parent
LEFT JOIN admin a ON m1."adminId" = a.cnic`;

    
// console.log("pair stats: ", pairStats)

    // if(!meetings.Meeting.length) return res.status(204).json();

    await prisma.$disconnect();

    return res.status(200).json({ pairStats });
}

export default handler;