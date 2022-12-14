import { PrismaClient } from "prisma/src/generated/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { method } = req;

    if (method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    // console.log(req.body);

    const { meetingId, referal } = req.body;

    console.log("at back: ", meetingId, referal);

    if(!meetingId || !referal){
      return res.status(403).json({error: "Please fill in all the fields"})
    }

    await prisma.meeting.update({
      where: {
       mid: meetingId 
      },
      data: {
        referedTo: referal
      }
    })

   
    res.status(200).json({
      msg: "Meeting referal successful",
    });
    prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error.",
    });
  }
}
