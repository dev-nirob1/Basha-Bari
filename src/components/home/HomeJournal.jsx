import Link from "next/link";
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
    <section className="py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-[0.4em] mb-6">The BashaBari Journal</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter leading-[0.9]">
              ARCHITECTURAL <br />
              <span className="text-zinc-400">PERSPECTIVES.</span>
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <p className="max-w-xs text-zinc-500 font-light leading-relaxed">
              Curated stories about modern living, design philosophy, and the evolving soul of Dhaka's finest residences.
            </p>
            <Link 
              href="/journal"
              className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-zinc-950 hover:text-emerald-700 transition-colors"
            >
              Explore the Journal
              <span className="w-12 h-px bg-zinc-200 group-hover:bg-emerald-700 group-hover:w-16 transition-all"></span>
            </Link>
          </div>
        </div>

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
