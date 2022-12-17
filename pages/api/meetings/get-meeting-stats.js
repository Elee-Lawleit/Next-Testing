import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {

    const { method } = req;
    if (method !== "GET") {
        return res.status(403).json({ error: "Method not allowed" });
    }

    const { dayString, userId, userRole } = req.query;

    const month = new Date().getMonth();
    // console.log("The value of month is: ", month);

    if (userRole === "admin") {
        var meetings = await prisma.admin.findFirst({
            where: {
                cnic: userId,
            },
            select: {
                meeting: {
                    include : {
                        timeslot:{
                            where: {
                                AND: [
                                    {
                                        date: { lte: new Date(`2022-${month + 1}-30`) }
                                    },
                                    {
                                        date: { gte: new Date(`2022-${month + 1}-30`) }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        })
    }
    if (userRole === "parent") {
        var meetings = await prisma.parent.findFirst({
            where: {
                cnic: userId,
            },
            select: {
                meeting: {
                    include: {
                        timeslot: {
                            where: {
                                AND: [
                                    {
                                        date: { lte: new Date(`2022-${month + 1}-30`) }
                                    },
                                    {
                                        date: { gte: new Date(`2022-${month + 1}-30`) }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        })
    }
    if (userRole === "student") {
        var meetings = await prisma.student.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                meeting: {
                    include: {
                        timeslot: {
                            where: {
                                AND: [
                                    {
                                        date: { lte: new Date(`2022-${month + 1}-30`) }
                                    },
                                    {
                                        date: { gte: new Date(`2022-${month + 1}-30`) }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        })
    }


    // console.log("Meetings stats are: ", meetings);

    // if (!meetings.Meeting.length) return res.status(204).json();

    return res.status(200).json({ meetings: meetings });
}


export default handler;