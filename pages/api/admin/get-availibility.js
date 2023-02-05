import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { userId } = req.query;

    console.log("USEID AT BACKEND: ", userId);
    
    const availibility = await prisma.admin.findMany({
        where: {
            cnic: userId,
        },
        select: {
            generalavail: true
        }
    })
    
    await prisma.$disconnect();
    
    return res.status(200).json({ availibility });
}

export default handler;