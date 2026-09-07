import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItRuns from "@/components/HowItRuns";
import Pricing from "@/components/Pricing";
import Proof from "@/components/Proof";
import SystemFlow from "@/components/SystemFlow";
import WhoThisIsFor from "@/components/WhoThisIsFor";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SystemFlow />
        <Proof />
        <WhoThisIsFor />
        <HowItRuns />
        <Pricing />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
