import ArticleCard from "./ArticleCard";

export default function JournalFeed() {
  const articles = [
    {
      slug: "minimalist-living",
      title: "The Subtle Art of Minimalist Living in Urban Spaces",
      category: "Architecture",
      date: "APR 12, 2026",
      readTime: "8 MIN READ",
      excerpt:
        "Minimalism is more than just an aesthetic choice; it is a philosophy of subtraction that enhances focus and mental clarity.",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
      size: "large",
    },
    {
      slug: "dhaka-hidden-courtyards",
      title: "Hidden Courtyards: The Soul of Old Dhaka Architecture",
      category: "Heritage",
      date: "APR 10, 2026",
      readTime: "12 MIN READ",
      excerpt:
        "A deep dive into the historical significance of internal courtyards and their modern reinterpretation in residential high-rises.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      size: "small",
    },
    {
      slug: "sustainable-materials",
      title: "Sustainable Materials for the Modern Home",
      category: "Sustainability",
      date: "APR 08, 2026",
      readTime: "6 MIN READ",
      excerpt:
        "Why choosing locally sourced, sustainable materials is the future of premium real estate development.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      size: "medium",
    },
    {
      slug: "light-as-architecture",
      title: "Light as Architecture: Designing with Natural Radiance",
      category: "Design",
      date: "APR 05, 2026",
      readTime: "10 MIN READ",
      excerpt:
        "How natural light dictates the rhythm of space and influences the wellbeing of its inhabitants.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      slug: "evolution-of-shared-spaces",
      title: "The Evolution of Shared Spaces in Modern Urbanism",
      category: "Urbanism",
      date: "APR 02, 2026",
      readTime: "7 MIN READ",
      excerpt:
        "How communal living and shared amenities are redefining the urban residential landscape for the next generation.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
      size: "medium",
    },
  ];

  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple 3-Column Grid with First-Child Span */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:auto-rows-auto">
          {articles.map((article, idx) => (
            <div key={idx} className="lg:first:col-span-2 h-full">
              <ArticleCard article={article} isFeatured={idx === 0} />
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-24 flex justify-center">
          <button className="group flex items-center gap-10 px-16 py-8 border border-zinc-200 hover:border-zinc-950 transition-colors duration-1000">
            <span className="text-[10px] font-bold text-zinc-950 uppercase tracking-[0.6em] group-hover:-translate-y-1 transition-transform duration-500 inline-block">
              Explore More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
