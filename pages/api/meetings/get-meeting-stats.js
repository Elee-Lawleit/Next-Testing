import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }


    // console.log("Data being sent to backend in req query: ", req.query)
    // console.log("Data being sent to backend in req body: ", req)

    const { userId, userRole } = req.query;


    // well then, here's the fix
    //using prisma aggregation... groupBy

    if (userRole === "admin") {
        var countedMeetings = await prisma.meeting.groupBy({
            by: ["meetingStatus"],
            _count: {
                _all: true
            },
            where: {
                adminId: parseInt(userId)
            }
        });
    }
    if (userRole === "parent") {
        console.log("parent running");
        var countedMeetings = await prisma.meeting.groupBy({
            by: ["meetingStatus"],
            _count: {
                _all: true
            },
            where: {
                parentId: parseInt(userId)
            }
        })
    }
    if (userRole === "student") {
        var countedMeetings = await prisma.meeting.groupBy({
            by: ["meetingStatus"],
            _count: {
                _all: true
            },
            where: {
                studentId: parseInt(userId)
            }
        })
    }

    console.log("fadasda", countedMeetings);

    // const pendingMeetings = countedMeetings[0]._count._all;
    // const attendedMeetings = countedMeetings[1]._count._all;
    // const totalMeetings = countedMeetings[0]._count._all + countedMeetings[1]._count._all;

    // return res.status(200).json({ total: totalMeetings, pending: pendingMeetings, attended: attendedMeetings });

}


export default handler;