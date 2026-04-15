import BlogEditor from "@/components/dashboard/BlogEditor";
import { getArticleBySlug } from "@/data/articles";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <BlogEditor article={article} />;
}
