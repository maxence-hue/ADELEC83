import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Section } from "../../../components/section";
import { TableOfContents } from "../../../components/toc";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug).catch(() => null);
  if (!post) {
    return createMetadata({ title: "Article", path: `/blog/${params.slug}`, type: "article" });
  }
  return createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${params.slug}`,
    type: "article",
    publishedTime: post.frontmatter.date
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const { content, frontmatter, headings } = post;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    description: frontmatter.description,
    author: {
      "@type": "Person",
      name: frontmatter.author
    }
  };

  return (
    <>
      <Script
        id={`breadcrumb-blog-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(`/blog/${params.slug}`)) }}
      />
      <Script
        id={`article-jsonld-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Section className="pt-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row">
          <article className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary">{new Date(frontmatter.date).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "long",
              year: "numeric"
            })}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">{frontmatter.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{frontmatter.description}</p>
            <div className="container-prose">{content}</div>
          </article>
          <aside className="w-full max-w-xs flex-none space-y-6">
            <TableOfContents items={headings} />
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">Auteur</p>
              <p>{frontmatter.author}</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-primary">Tags</p>
              <ul className="mt-2 space-y-1">
                {frontmatter.tags.map((tag) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs uppercase tracking-widest text-primary">Services liés</p>
              <ul className="mt-2 space-y-1">
                {frontmatter.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
