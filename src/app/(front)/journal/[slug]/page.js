import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/journal/ArticleCard";
import JournalArticleContent from "@/components/journal/JournalArticleContent";
import CTASection from "@/components/shared/CTASection";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | BashaBari Journal`,
    description: article.excerpt,
  };
}

export default async function JournalDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Spacer for fixed Navbar */}
      <div className="h-24" />

      {/* Main Article */}
      <JournalArticleContent article={article} />

      {/* Read Next Section */}
      <section className="py-20 lg:py-28 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-14">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                Continue Reading
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-zinc-950 tracking-tighter">
                Read Next
              </h2>
            </div>
            <Link
              href="/journal"
              className="group hidden sm:flex items-center justify-between gap-6 bg-transparent border border-zinc-200 text-zinc-950 px-8 py-4 hover:border-zinc-950 transition-colors duration-500 min-w-[200px]"
            >
              <span className="uppercase tracking-[0.2em] text-xs font-bold">
                All Articles
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
