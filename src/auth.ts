import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "SignIn with your credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        console.log("this are credentials ", credentials);
        const user = {
          id: "1",
          fullName: "Hello world",
          password: "123456789",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
