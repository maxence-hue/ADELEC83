import Script from "next/script";
import { getBlogPosts } from "@/lib/content";
import { Section } from "../../components/section";
import { BlogCard } from "../../components/blog-card";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Actualités ADElec 83 : réglementation électrique, retours d’expérience, conseils domotique, bornes de recharge et photovoltaïque.",
  path: "/blog"
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Script
        id="breadcrumb-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/blog")) }}
      />
      <Section
        title="Actualités, retours d’expérience et conseils"
        description="Découvrez les chantiers en cours, les évolutions réglementaires et nos astuces pour optimiser vos installations."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
