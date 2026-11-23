import { getSignUpUrl } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

/* Starts account creation on the hosted AuthKit page. */
export async function GET() {
  redirect(await getSignUpUrl());
}
