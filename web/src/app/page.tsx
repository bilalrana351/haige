import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Channels } from "@/components/Channels";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Channels />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
