"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { FormSchema } from "./zod";

export async function logIn(formData: z.infer<typeof FormSchema>) {
  console.log("logging in");
  await signIn("credentials", formData);
}
