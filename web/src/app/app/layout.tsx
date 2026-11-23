import type { Metadata } from "next";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

export const metadata: Metadata = {
  title: "HAIGE",
  robots: { index: false, follow: false },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AuthKitProvider>{children}</AuthKitProvider>;
}
