import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import HowItWorks from "@/components/about/HowItWorks";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <AboutMission />
      <HowItWorks />
    </div>
  );
}
