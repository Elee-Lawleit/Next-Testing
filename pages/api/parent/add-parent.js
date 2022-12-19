import { PrismaClient } from "prisma/src/generated/client"
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { method } = req;

    if (method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    const { username, email, cnic, password, fname, lname } = req.body;

    if(!username || !email || !cnic || !password || !fname || !lname){
      return res.status(403).json({error: "Please fill in all the fields"});
    }

    await prisma.parent.create({
      data: {
        firstName: fname,
        lastName: lname,
        email: email,
        cnic: cnic,
        address: "Rawalpindi",
        userlogin: {
          create: {
            userName: username,
            password: password,
            email: email,
            role: "Parent"
          }
        }
      },
    });



    res.status(200).json({
      msg: "Parent added.",
    });
    await prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server error.",
    });
  }
}

