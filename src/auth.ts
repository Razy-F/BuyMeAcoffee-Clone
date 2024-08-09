import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userData } from "./data/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      /* name: "SignIn with your credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      }, */
      authorize: async (credentials) => {
        console.log("this are credentials ", credentials);
        const user = userData.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password,
        );
        if (user) {
          return { ...user, name: user.username };
        } else {
          return null;
        }
      },
    }),
  ],
});
