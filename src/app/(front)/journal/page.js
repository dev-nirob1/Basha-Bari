import JournalFeed from "@/components/journal/JournalFeed";

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
      
    </main>
  );
}
