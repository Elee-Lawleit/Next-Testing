import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "/prisma/src/generated/client"

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
        role: {
          label: "Role",
          type: "select",
        },
      },
      authorize: async (credentials) => {

        console.log("Credentials: ", credentials)

        if (!credentials.username || !credentials.password || !credentials.role) {
          console.log("Inside error if");
          return null;
        }

        

        const userRole = credentials.role;
        // console.log("THE ADMIN MODEL IS: ", prisma.admin);

        console.log("Type is: ", typeof credentials.username, typeof credentials.password);

        if (credentials.role === "parent") {
          console.log("INside parent if")
          var user = await prisma.parent.findFirst({
            where: {
              parentName: credentials.username,
              parentPassword: credentials.password,
            }
          });
        }

        if (credentials.role === "admin") {
          var user = await prisma.admin.findFirst({
            where: {
              adminName: credentials.username.toString(),
              adminPassword: credentials.password.toString()
            }
          });
        }
        if (credentials.role === "student") {
          console.log("Inside student: ", credentials)
          var user = await prisma.student.findFirst({
            where: {
              studentName: credentials.username.toString(),
              studentPassword: credentials.password.toString()
            }
          });
        }

        console.log("This is user object returned from database: ", user);

        // console.log("This USer: ", user.adminName || user.parentName || user.studentName);


        if (user) {
          // console.log("Inside user if");
          return {
            id: user.id,
            name: user.parentName || user.studentName || user.adminName,
            role: userRole
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        //attaching id inside token here because next-auth automatically deletes id field
        //because it's sensitive I guess
        //didn't have to reattach the username here to token
        token.id = user.id;
        token.role = user.role
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role
      }
      return session;
    },
  },
  secret: "test_secret",
  jwt: {
    secret: "test_secret",
    encryption: true,
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
