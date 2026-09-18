import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TalentCompaniesSection from "@/components/sections/TalentCompaniesSection";
import TournamentsSection from "@/components/sections/TournamentsSection";
import NetworkingSection from "@/components/sections/NetworkingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsSection from "@/components/sections/NewsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/layout/Footer";
import { getSiteMessages } from "@/i18n/messages";
import { setRequestLocale } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LINKEDIN_URL } from "@/lib/constants";
import BackToTop from "@/components/ui/BackToTop";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getSiteMessages();
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: new URL("/brand/symbol-positive.svg", SITE_URL).toString(),
    description: messages.metadata.description,
    sameAs: [LINKEDIN_URL],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TalentCompaniesSection />
        <TournamentsSection />
        <NetworkingSection />
        <TestimonialsSection />
        <NewsSection />
        <NewsletterSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <BackToTop label={messages.backToTop.label} />
    </>
  );
}
