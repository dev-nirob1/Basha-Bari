import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutStats from "@/components/about/AboutStats";
import OurValues from "@/components/about/OurValues";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/shared/CTASection";

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* 1. Simplified Hero */}
      <AboutHero />

      {/* 2. Strategy & Vision Section (Containerized) */}
      <AboutMission />

      {/* 3. Solid Background Stats */}
      <AboutStats />

      {/* 4. Core Values */}
      <OurValues />

      {/* 5. Services/Offerings (Cleaned up visuals) */}
      <WhatWeOffer />

      {/* 6. The Team (Using SectionHeader) */}
      <TeamSection />

      {/* 7. Shared Global CTA */}
      <CTASection />
    </div>
  );
}
