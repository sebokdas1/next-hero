import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

const handler = nextAuth({
  session: {
    strategy: "jwt",
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
});
export { handler as GET, handler as POST };

const users = [
  {
    email: "sebok@gmail.com",
    password: "sebok",
  },
  {
    email: "a@gmail.com",
    password: "sebok",
  },
  {
    email: "b@gmail.com",
    password: "sebok",
  },
];
