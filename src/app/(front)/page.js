import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import PopularLocations from "@/components/home/PopularLocations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeJournal from "@/components/home/HomeJournal";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProperties />
      <BrowseByCategory />
      <PopularLocations />
      <WhyChooseUs />
      <HomeJournal />
      <Testimonials />
      <CTASection />
    </div>
  );
}
