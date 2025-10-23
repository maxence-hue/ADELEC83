import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { BlogCard } from '@/components/blog-card';
import { supabase } from '@/lib/supabase';
import { Calendar, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - ADELEC83 | Actualités énergie et conseils',
  description: 'Actualités sur le photovoltaïque, la climatisation et l’électricité. Conseils, aides financières et innovations dans le Var.',
};

export default async function BlogPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  const categories = [
    { name: 'Tous', count: articles?.length || 0 },
    { name: 'Actualités', count: articles?.filter(a => a.category === 'Actualités').length || 0 },
    { name: 'Énergie', count: articles?.filter(a => a.category === 'Énergie').length || 0 },
    { name: 'Innovation', count: articles?.filter(a => a.category === 'Innovation').length || 0 },
  ];

  return (
    <>
      <Hero
        title="Blog & Actualités"
        subtitle="Conseils et informations sur l\'énergie dans le Var"
        image="/images/hero-blog.jpg"
        cta={{
          text: 'S\'abonner à la newsletter',
          href: '/contact',
        }}
      />

      <Section>
        <div className="prose prose-lg max-w-none text-center">
          <p className="text-xl text-gray-700 mb-8">
            Découvrez nos articles sur le photovoltaïque, la climatisation et l\'électricité. 
            Restez informé des dernières actualités, aides financières et innovations dans le domaine de l\'énergie.
          </p>
        </div>
      </Section>

      {/* Catégories */}
      <Section className="bg-gray-50">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                index === 0
                  ? 'bg-[#0047AB] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </Section>

      {/* Articles */}
      <Section>
        {articles && articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <BlogCard
                key={article.id}
                slug={article.slug}
                title={article.title}
                description={article.excerpt || ''}
                date={new Date(article.published_at || article.created_at).toLocaleDateString('fr-FR')}
                tags={article.tags || []}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Aucun article disponible pour le moment.
          </p>
        )}
      </Section>

      {/* Newsletter */}
      <Section className="bg-[#1e1e1e] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-gray-300 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos conseils énergie et les dernières actualités
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#FF8C42] text-[#1e1e1e] rounded-lg font-semibold hover:bg-[#FF8C42]/90 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </Section>

      <CTASection
        title="Besoin de conseils personnalisés ?"
        subtitle="Nos experts sont à votre disposition"
      />
    </>
  );
}
