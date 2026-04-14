import JournalFeed from "@/components/journal/JournalFeed";
import CTASection from "@/components/shared/CTASection";

export const metadata = {
  title: "The Journal | BashaBari Editorial",
  description: "Perspectives on modern architecture, curated living, and the evolving soul of the city's finest residences.",
};

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <div className="pt-32">
        <JournalFeed />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 font-sans">
        <CTASection />
      </div>
    </main>
  );
}
