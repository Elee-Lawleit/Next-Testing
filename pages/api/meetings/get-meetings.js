import { PrismaClient } from "/prisma/src/generated/client";
const prisma = new PrismaClient();

const handler = async(req, res) => {

    const {method} = req;
    if(method !== "GET"){
        return res.status(403).json({error: "Method not allowed"});
    }

    const {dayString, userId, userRole} = req.query;

    if(userRole === "admin"){
        var meetings = await prisma.admin.findFirst({
            where:{
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: {
                        meetingDay: new Date(dayString)
                    }
                }
            }
        })
    }
    if (userRole === "parent"){
        var meetings = await prisma.parent.findUnique({
            where: {
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: { 
                        meetingDay: new Date(dayString)
                    }
                }
            }
        })
    }
    if (userRole === "student"){
        var meetings = await prisma.student.findFirst({
            where: {
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: {
                        meetingDay: new Date(dayString)
                    }
                }
            }
        })
    }
    

    console.log("Meetings are: ", meetings);

    // if(!meetings.Meeting.length) return res.status(204).json();

  return res.status(200).json({meetings: meetings});
}


export default handler;