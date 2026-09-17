import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TalentCompaniesSection from "@/components/sections/TalentCompaniesSection";
import TournamentsSection from "@/components/sections/TournamentsSection";
import NetworkingSection from "@/components/sections/NetworkingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TalentCompaniesSection />
        <TournamentsSection />
        <NetworkingSection />
      </main>
    </>
  );
}
