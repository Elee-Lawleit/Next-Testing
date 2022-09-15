import { PrismaClient } from "/prisma/src/generated/client";
import React from 'react'
const prisma = new PrismaClient();

const handler = async(req, res) => {

    const {method} = req;
    if(method !== "GET"){
        return res.status(403).json({error: "Method not allowed"});
    }


    // console.log("Data being sent to backend in req query: ", req.query)
    // console.log("Data being sent to backend in req body: ", req)

    const {dayString, userId, userRole} = req.query;
    console.log("Day stirng is: ", dayString, "UserId is: ", userId)

    if(userRole === "admin"){
        var meetings = await prisma.admin.findFirst({
            where:{
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: {
                        meetingDay: dayString
                    }
                }
            }
        })
    }
    if (userRole === "parent"){
        console.log("Parent route running")
        var meetings = await prisma.parent.findUnique({
            where: {
                id: parseInt(userId),
            },
            select: {
                Meeting: {
                    where: { 
                        meetingDay: dayString
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
                        meetingDay: dayString
                    }
                }
            }
        })
    }

    console.log("Data returned is: ", meetings);

    //going to be undefined if no meetings exist
    // console.log("Response inside backend: ", meetings);

    console.log(meetings.Meeting.length);
    
    if(!meetings.Meeting.length) return res.status(204).json();

  return res.status(200).json({meetings: meetings});
}


export default handler;