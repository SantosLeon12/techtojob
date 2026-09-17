import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TalentCompaniesSection from "@/components/sections/TalentCompaniesSection";
import TournamentsSection from "@/components/sections/TournamentsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TalentCompaniesSection />
        <TournamentsSection />
      </main>
    </>
  );
}
