import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { method } = req;
  if (method !== "GET") {
    return res.status(403).json({ error: "Method not allowed" });
  }

  const { dayString, userId, userRole } = req.query;
  // console.log("Date: ", typeof new Date(dayString));

  // console.log("daystring: ", new Date(dayString))

  const meetings = await prisma.$queryRaw`SELECT reason, status, "regNo", mid
                                         FROM meeting
                                         WHERE ("regNo" = ${userId} 
                                                OR "parentId" = ${userId} 
                                                OR "adminId" = ${userId}) 
                                         AND date = ${new Date(
                                           dayString
                                         )}::DATE`;
  await prisma.$disconnect();
  return res.status(200).json({ meetings });
};

export default handler;
