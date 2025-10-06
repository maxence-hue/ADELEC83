import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/content';
import { blogPostingJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { Section } from '@/components/section';
import { TableOfContents } from '@/components/toc';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article introuvable' };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description
    }
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();
  const { Content, frontmatter, toc } = post;

  return (
    <Section title={frontmatter.title} subtitle={frontmatter.description}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: frontmatter.title, href: `/blog/${post.slug}` }
            ])
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingJsonLd({
              title: frontmatter.title,
              description: frontmatter.description,
              date: frontmatter.date,
              slug: post.slug
            })
          )
        }}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr,280px]">
        <article className="prose prose-slate max-w-none dark:prose-invert">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Publié le {new Date(frontmatter.date).toLocaleDateString('fr-FR')} — {frontmatter.author}
          </p>
          {Content}
        </article>
        <aside className="hidden lg:block">
          <TableOfContents items={toc} />
        </aside>
      </div>
    </Section>
  );
}
