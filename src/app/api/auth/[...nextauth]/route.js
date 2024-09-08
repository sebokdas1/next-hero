import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

export const outhOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
          required: true,
          placeholder: "your email",
        },
        password: {
          label: "password",
          type: "password",
          required: true,
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = nextAuth(outhOptions);
export { handler as GET, handler as POST };

const users = [
  {
    email: "sebok@gmail.com",
    password: "sebok",
    type: "admin",
  },
  {
    email: "a@gmail.com",
    password: "sebok",
    type: "modarator",
  },
  {
    email: "b@gmail.com",
    password: "sebok",
    type: "member",
  },
];
