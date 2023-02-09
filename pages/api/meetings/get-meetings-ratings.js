import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    
    const ratings = await prisma.$queryRaw`SELECT  SUM(polite) as polite_sum, SUM(rude) as rude_sum, SUM(attentive) as attentive_sum 
    FROM feedback`;

    console.log("RATINGS: ", ratings)
    await prisma.$disconnect();
    return res.status(200).json({ ratings });
}

export default handler;