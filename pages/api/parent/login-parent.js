import { PrismaClient } from "@prisma/client";
import withProtect from "middleware/withProtect";
import jwt from "jsonwebtoken"
const prisma = new PrismaClient();

const handler = async (req, res) => {
  try {
    const { method } = req;
    if (method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" })
    }

    const { username, password, role } = req.body;

    if (!username || !password) {
      return res.status(403).json({ error: "Please fill in all the fields" });
    }


    
    if(role === "parent"){
      console.log("parent being logged in")
      var user = await prisma.parent.findFirst({
        where: {
          parentName: username,
          parentPassword: password
        }
      });
    }
    if(role === "admin"){
      console.log("admin being logged in")
      var user = await prisma.admin.findFirst({
        where: {
          adminName: username,
          adminPassword: password
        }
      });
    }
    if(role === "student"){
      console.log("student being logged in")
      var user = await prisma.student.findFirst({
        where: {
            studentName: username,
            studentPassword: password
          }
        });
    }

    if (!user) {
      return res.status(401).json({ error: "Wrong email/username or password" })
    }
    
    const accessToken = jwt.sign({id: user.id, timeStamp: new Date().getTime()}, "very unique secret key")

    return res.status(200).json({
      msg: "Signed up successfully.",
      token: accessToken,
    });
  }
  catch (err) {
    console.log("The error on server is: ", err);
    return res.status(500).json({
      msg: "Server error.",
    });
  }
}

//will keep this for now
export default handler;

// export default withProtect(handler);