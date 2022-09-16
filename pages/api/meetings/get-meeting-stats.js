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

    //I don't think I need to mention this, but this obviously isn't the correct way to do this

    // ---------- GOING TO FIX THIS LATER ----------

    if (userRole === "admin") {
        var countPending = await prisma.admin.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingStatus: false
                            }
                        }
                    }
                }, 
            }
        })
        var countDone = await prisma.admin.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingStatus: true
                            }
                        }
                    }
                },
            }
        })
    }
    if (userRole === "parent") {
        console.log("parent running");
        var countPending = await prisma.parent.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingStatus: false
                            }
                        }
                    }
                },
            }
        })
        var countDone = await prisma.parent.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingStatus: true
                            }
                        }
                    }
                },
            }
        })
    }
    if (userRole === "student") {
        var countPending = await prisma.student.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingStatus: false
                            }
                        }
                    }
                },
            }
        })
        var countDone = await prisma.student.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                _count: {
                    select: {
                        Meeting: {
                            where: {
                                meetingStatus: true
                            }
                        }
                    }
                },
            }
        })
    }


    console.log("Pending meetings: ", countPending, "Done meetings: ", countDone);

    return res.status(200).json({ meetings: [countPending, countDone] });

}


export default handler;