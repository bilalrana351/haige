import { getSignInUrl } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

/* Starts sign-in on the hosted AuthKit page. Also registered in WorkOS as the Initiate login URI,
   so links from password-reset and invitation emails land here first. */
export async function GET() {
  redirect(await getSignInUrl());
}
