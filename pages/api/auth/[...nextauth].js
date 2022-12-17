import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "/prisma/src/generated/client";

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

        if (
          !credentials.username ||
          !credentials.password ||
          !credentials.role
        ) {
          return null;
        }

        const userRole = credentials.role;

        let user = await prisma.userlogin.findFirst({
          where: {
            role: credentials.role,
            userName: credentials.username,
            password: credentials.password,
          },
          include:{
            parent: true,
            admin: true,
            student: true
          }
        });

        if (user) {
          const uniqueIdentifier = user.regNo || user.parentId || user.adminId;
          const name = user.parent?.firstName || user.admin?.firstName || user.student?.firstName
          console.log("User: ", user)

          return {
            id: uniqueIdentifier,
            role: userRole,
            name: name
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
        // token.id = user.id;
        token.id= user.id;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name;
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
