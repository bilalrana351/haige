import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

/* Source Serif and Source Sans are one superfamily, drawn as companions: same proportions and
   rhythm, so headings and body read as one voice. The optical-size axis gives large headlines
   their display cut. */
const display = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = "HAIGE, the AI Growth Engine";
const description =
  "HAIGE finds where Google and AI answers like ChatGPT, Gemini and Claude leave your company out, writes the fix, and publishes it only when your team approves.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "HAIGE",
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "HAIGE",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

/* Browser chrome matches the paper color, so the page does not sit under a white bar on mobile. */
export const viewport: Viewport = {
  themeColor: "#f4f0e6",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
