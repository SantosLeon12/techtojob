import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TalentCompaniesSection from "@/components/sections/TalentCompaniesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TalentCompaniesSection />
      </main>
    </>
  );
}
