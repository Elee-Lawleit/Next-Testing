import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
      authorize: (credentials) => {
        if (
          credentials?.username === "AliOongaBoonga" &&
          credentials?.password === "11223344" &&
          credentials?.role === "parent"
        ) {
          return {
            id: 1,
            username: "AliOongaBoonga",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id;
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
