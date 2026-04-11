import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import BrowseByCategory from "@/components/BrowseByCategory";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProperties />
      <BrowseByCategory />
    </div>
  );
}
