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

    const today = new Date();

    if (userRole === "admin") {
        var count = await prisma.admin.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingDay: today
                            }
                        }
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
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingDay: today
                            }
                        }
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
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingDay: today
                            }
                        }
                    }
                }
            }
        })
    }

    //returning meeting count like this bc prisma doesn't support where clause inside _count right now
    //the other way is using raw query, but you know what's the point of using raw query with an ORM, right?
    // return res.status(200).json({ meetings: count.Meeting.length });
    
    //well, the feature just came out, so
    return res.status(200).json({ meetings: count?._count?.Meeting });

}


export default handler;