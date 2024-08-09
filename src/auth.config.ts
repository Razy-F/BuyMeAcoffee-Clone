import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/log-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("🍪 auth 🍪");
      console.log(auth);
      console.log("🍪 auth 🍪");
      const isLoggedIn = !!auth?.user;
      const isHomePage = nextUrl.pathname === "/";
      if (isHomePage) {
        return true;
      } else if (isLoggedIn) {
        if (nextUrl.searchParams.get("callbackUrl")) {
          console.log("render the callback");
          return Response.redirect(
            new URL(nextUrl.searchParams.get("callbackUrl") as string),
          );
        } else {
          return true;
        }
      } else {
        false;
      }
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
