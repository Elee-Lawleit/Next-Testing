import { PrismaClient } from "@prisma/client";
import { Router } from "next/router";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  try {
    const { method } = req;
    if (method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" })
    }

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(403).json({ error: "Please fill in all the fields" });
    }

    const user = await prisma.parent.findFirst({
      where: {
          username: username,
          password: password
        }
      });

    if (!user) {
      return res.status(401).json({ error: "Wrong email/username or password" })
    }

    return res.status(200).json({
      msg: "Signed up successfully.",
    });
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Server error.",
    });
  }
}

export default handler;