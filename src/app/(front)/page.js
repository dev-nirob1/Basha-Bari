import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import PopularLocations from "@/components/home/PopularLocations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

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
