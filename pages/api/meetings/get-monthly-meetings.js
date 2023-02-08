import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    console.log("AT BAKCEND OF MONTHLY MEETINGS")

    

    const { userId, month, year } = req.query;

    if(!userId || !month){
        return res.status(403).json({ error: "Please fill in all the fields" });
    }

    console.log("USerID: ", userId)

    // this only gives the count, now how do I get the details for every meeting
    const totalMonthlyMeetings = await prisma.$queryRaw`SELECT COUNT(mid)::int as meetings_in_week, TO_CHAR(date, 'W')::integer AS week_number
    FROM meeting
    WHERE date >= ${new Date(`${year}-${month}-"1"`)} 
    AND date <= ${new Date(`${year}-${month}-"31"`)}
    AND ( "adminId" = ${userId} OR "parentId" = ${userId} OR "regNo" = ${userId} )
    GROUP BY week_number`;

    const totalPendingMeetings = await prisma.$queryRaw`SELECT COUNT(mid)::int as meetings_in_week, TO_CHAR(date, 'W')::integer AS week_number
    FROM meeting
    WHERE date >= ${new Date(`${year}-${month}-"1"`)} 
    AND date <= ${new Date(`${year}-${month}-"31"`)}
    AND status = 'pending'
    AND ( "adminId" = ${userId} OR "parentId" = ${userId} OR "regNo" = ${userId} )
    GROUP BY week_number`;

    const totalCompletedMeetings = await prisma.$queryRaw`SELECT COUNT(hid)::int as meetings_in_week, TO_CHAR(date, 'W')::integer AS week_number
    FROM history
    WHERE date >= ${new Date(`${year}-${month}-"1"`)} 
    AND date <= ${new Date(`${year}-${month}-"31"`)}
    AND status = 'completed'
    AND ( "adminId" = ${userId} OR "parentId" = ${userId} OR "regNo" = ${userId} )
    GROUP BY week_number`;

    console.log("monthly meetings are: ", totalMonthlyMeetings);
    console.log("monthly meetings are: ", totalPendingMeetings);
    console.log("monthly meetings are: ", totalCompletedMeetings);

    await prisma.$disconnect();

    return res.status(200).json({ totalMonthlyMeetings, totalPendingMeetings, totalCompletedMeetings });

}


export default handler;