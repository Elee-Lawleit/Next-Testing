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

    //this only gives the count, now how do I get the details for every meeting
    // const totalMonthlyMeetings = await prisma.$queryRaw`SELECT COUNT(m.mid)::int as meetings_in_week, TO_CHAR(t.date, 'W')::integer AS week_number
    // FROM meeting m, timeslot t
    // WHERE t.date >= ${new Date(`2022-${month}-"1"`)} 
    // AND t.date <= ${new Date(`2022-${month}-"31"`)}
    // AND m.tsid = t.tsid
    // GROUP BY week_number`;

    // const totalPendingMeetings = await prisma.$queryRaw`SELECT COUNT(m.mid)::int as meetings_in_week, TO_CHAR(t.date, 'W')::integer AS week_number
    // FROM meeting m, timeslot t
    // WHERE t.date >= ${new Date(`2022-${month}-"1"`)} 
    // AND t.date <= ${new Date(`2022-${month}-"31"`)}
    // AND m.status = 'pending'
    // AND m.tsid = t.tsid
    // GROUP BY week_number`;

    // const totalCompletedMeetings = await prisma.$queryRaw`SELECT COUNT(m.mid)::int as meetings_in_week, TO_CHAR(t.date, 'W')::integer AS week_number
    // FROM meeting m, timeslot t
    // WHERE t.date >= ${new Date(`${year}-${month}-"1"`)} 
    // AND t.date <= ${new Date(`${year}-${month}-"31"`)}
    // AND m.status = 'completed'
    // AND m.tsid = t.tsid
    // GROUP BY week_number`;

    // console.log("monthly meetings are: ", monthlyMeetings);
    let totalMonthlyMeetings = []
     let totalPendingMeetings = []
     let totalCompletedMeetings = []

    await prisma.$disconnect();

    return res.status(200).json({ totalMonthlyMeetings, totalPendingMeetings, totalCompletedMeetings });

}


export default handler;