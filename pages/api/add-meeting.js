import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const addMeeting = async() =>{
  const res = await prisma.meeting.create({
    data:{
      meetingDay: "Monday",
      meetingStatus: false,
      meetingReason: "Some example reson for a meeting",
      meetingStartTime: "08:00",
      meetingEndTime: "10:00",
      adminId: 2,
      studentId: 1,
      parentId: 1
    }
  })
  console.log("THIS IS RESPONSE: ", res)
  return res;
}

export default addMeeting;