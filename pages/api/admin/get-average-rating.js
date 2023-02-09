import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    //  const avgRating = await prisma.$queryRaw`select history."adminId", AVG(feedback.polite + feedback.rude + feedback.attentive) / 3 as average_rating
    //  from feedback, history
    //  where feedback.hid = history.hid AND history."adminId" = (select "adminId" from history where hid = feedback.hid)
    //  group by history."adminId"
    //  order by average_rating DESC`;

    const avgRating = await prisma.$queryRaw`SELECT admin."firstName", admin."lastName", AVG(feedback.polite + feedback.rude + feedback.attentive) / 3 as average_rating
    FROM feedback, history, admin
    WHERE feedback.hid = history.hid AND history."adminId" = admin."cnic" AND admin."cnic" = (SELECT "adminId" FROM history WHERE hid = feedback.hid)
    GROUP BY history."adminId", admin."firstName", admin."lastName"
    ORDER BY average_rating DESC;
`

    //  console.log("avg: ", avgRating);

    await prisma.$disconnect();

    return res.status(200).json({ avgRating });
}

export default handler;