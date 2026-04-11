import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import BrowseByCategory from "@/components/BrowseByCategory";
import PopularLocations from "@/components/PopularLocations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProperties />
      <BrowseByCategory />
      <PopularLocations />
    </div>
  );
}
