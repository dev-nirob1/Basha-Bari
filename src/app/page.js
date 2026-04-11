import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import BrowseByCategory from "@/components/BrowseByCategory";
import PopularLocations from "@/components/PopularLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProperties />
      <BrowseByCategory />
      <PopularLocations />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
