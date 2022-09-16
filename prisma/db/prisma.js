import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

export default prisma;


//keeping multiple instances of prisma for now
//plan on using single instance in future