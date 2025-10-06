import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/content';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Section } from '@/components/section';
import { BlogCard } from '@/components/blog-card';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Actualités ADElec 83 : retours d'expérience sur la domotique, les bornes de recharge et les installations CVC."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Section title="Actualités et retours d'expérience" subtitle="Conseils de nos techniciens pour réussir vos projets énergie et confort.">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Blog', href: '/blog' }
            ])
          )
        }}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            date={post.frontmatter.date}
            tags={post.frontmatter.tags}
          />
        ))}
      </div>
    </Section>
  );
}
