import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProperties />
    </div>
  );
}
