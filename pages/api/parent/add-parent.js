import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { method } = req;

    if (method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    const { username, email, cnic, phone, password } = req.body;

    if(!username || !email || !cnic || !phone || !password){
      return res.status(403).json({error: "Please fill in all the fields"});
    }

    await prisma.parent.create({
      data: {
        parentName: username,
        parentEmail: email,
        parentCnic: cnic,
        parentPhone: phone,
        parentPassword: password,
      },
    });

    res.status(200).json({
      msg: "Parent added.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error.",
    });
  }
}

