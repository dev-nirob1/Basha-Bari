import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/journal/ArticleCard";

// Mock articles data for homepage highlight
const HOME_ARTICLES = [
  {
    id: 1,
    title: "Minimalist Modernity: The Evolution of Dhaka's Skyline",
    excerpt: "Exploring how brutalist roots and contemporary glass facades are redefining the urban architectural narrative.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    category: "Architecture",
    date: "Oct 15, 2023",
    readTime: "6 min read",
    slug: "minimalist-modernity-dhaka-skyline"
  },
  {
    id: 2,
    title: "Interior Philosophy: Bringing the Outdoors In",
    excerpt: "The rise of biophilic design in luxury apartments and how it impacts the holistic living experience.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    category: "Design",
    date: "Oct 12, 2023",
    readTime: "4 min read",
    slug: "interior-philosophy-outdoors-in"
  },
  {
    id: 3,
    title: "The Soul of the City: A Guide to Gulshan's Hidden Gems",
    excerpt: "Beyond the high-rises, discover the curated spots that define the neighborhood's exclusive lifestyle.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    category: "Lifestyle",
    date: "Oct 10, 2023",
    readTime: "8 min read",
    slug: "soul-of-the-city-gulshan-guide"
  }
];

export default function HomeJournal() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader 
          title="Architectural Perspectives"
          subtitle="The BashaBari Journal"
          linkText="Explore the Journal"
          linkHref="/journal"
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
}
