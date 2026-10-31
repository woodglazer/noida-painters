import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blogs";

export default async function BlogSection() {
  const publishedArticles = await getPublishedBlogPosts();
  const articles = (publishedArticles || []).slice(0, 3);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      id="blog"
      className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-8 bg-[#022b5c]" />
            Painting Guides
            <span className="h-px w-8 bg-[#022b5c]" />
          </p>
          <h2 id="blog-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Expert Advice &amp; Tips
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Practical painting guides to help you make informed decisions for your home.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-[#022b5c]/40 hover:shadow-md"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#022b5c]">
                  {article.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 transition group-hover:text-[#022b5c]">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2.5 line-clamp-3 text-sm text-slate-600">
                  {article.description}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#022b5c] transition hover:text-[#011b3d]"
                  >
                    Read Guide →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#022b5c] px-6 py-3 text-sm font-bold text-[#022b5c] transition hover:bg-[#022b5c] hover:text-white"
          >
            View All Painting Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
