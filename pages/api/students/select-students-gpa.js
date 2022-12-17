import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

const handler = async(req, res) => {
  const {method} = req;
  
  if(method !== "GET"){
    return res.status(405).json({ error: "Method not allowed" })
  }

  const {gpa} = req.query;

  if(!gpa){
    return res.status(403).json({ error: "Please fill in the gpa field" });
  }

  let students = await prisma.cgpa.findMany({
    where:{
      cgpa: {lte: parseFloat(gpa)}
    },
  })

  return res.status(200).json({students})
}

export default handler;