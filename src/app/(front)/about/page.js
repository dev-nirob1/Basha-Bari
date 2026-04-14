import ModernAbout from "@/components/about/ModernAbout";
import OurValues from "@/components/about/OurValues";
import AboutStats from "@/components/about/AboutStats";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import TeamSection from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <ModernAbout />
      <OurValues />
      <AboutStats />
      <WhatWeOffer />
      <TeamSection />
    </div>
  );
}
