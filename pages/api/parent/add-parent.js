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

    await prisma.parent.create({
      data: {
        username: username,
        email: email,
        cnic: cnic,
        phone: phone,
        password: password,
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
