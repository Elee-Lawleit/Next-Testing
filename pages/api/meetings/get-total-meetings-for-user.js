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
    console.log("userRole is: ", userRole, "UserId is: ", userId)

    const today = new Date().toDateString();

    if (userRole === "admin") {
        var count = await prisma.admin.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: {
                        meetingDay: today
                    }
                }
            }
        })
    }
    if (userRole === "parent") {
        var count = await prisma.parent.findUnique({
            where: {
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: {
                        meetingDay: today
                    }
                }
            }
        })
    }
    if (userRole === "student") {
        var count = await prisma.student.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: {
                        meetingDay: today
                    }
                }
            }
        })
    }

    console.log("Count of meeting is: ", count.Meeting.length);

    // console.log(meetings.Meeting.length);


    //returning meeting count like this bc prisma doesn't support where clause inside _count right now
    //the other way is using raw query, but you know what's the point of using raw query with an ORM, right?
    return res.status(200).json({ meetings: count.Meeting.length });
}


export default handler;