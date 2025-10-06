import type { ReactNode } from 'react';
import { Badge } from '@/components/badge';
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDXFromSource, loadMarkdownFile } from './mdx';
import { serviceOrder } from './config';

const root = process.cwd();
const serviceDir = path.join(root, 'content', 'services');
const realisationDir = path.join(root, 'content', 'realisations');
const blogDir = path.join(root, 'content', 'blog');

const mdxComponents = {
  Badge
};

export type ServiceFrontmatter = {
  title: string;
  excerpt: string;
  hero: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  faq: { q: string; a: string }[];
};

export type Service = {
  slug: string;
  frontmatter: ServiceFrontmatter;
  Content: ReactNode;
};

export async function getServiceSlugs() {
  const entries = await fs.readdir(serviceDir);
  return entries
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export async function getServices(): Promise<Service[]> {
  const slugs = await getServiceSlugs();
  const services = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(serviceDir, `${slug}.md`);
      const source = await fs.readFile(filePath, 'utf-8');
      const { content, frontmatter } = await compileMDXFromSource<ServiceFrontmatter>({
        source
      });
      return {
        slug,
        Content: content,
        frontmatter
      };
    })
  );

  const ordered = services.sort((a, b) => {
    const ai = serviceOrder.indexOf(a.slug);
    const bi = serviceOrder.indexOf(b.slug);
    if (ai === -1 && bi === -1) return a.frontmatter.title.localeCompare(b.frontmatter.title);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return ordered;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const filePath = path.join(serviceDir, `${slug}.md`);
  try {
    const source = await fs.readFile(filePath, 'utf-8');
    const { content, frontmatter } = await compileMDXFromSource<ServiceFrontmatter>({
      source
    });
    return {
      slug,
      Content: content,
      frontmatter
    };
  } catch (error) {
    console.error(`Unable to load service ${slug}`, error);
    return null;
  }
}

export type RealisationFrontmatter = {
  title: string;
  description: string;
  ville: string;
  annee: string;
  tags: string[];
};

export type Realisation = RealisationFrontmatter & {
  slug: string;
  content: string;
};

export async function getRealisations(): Promise<Realisation[]> {
  const entries = await fs.readdir(realisationDir);
  const items = await Promise.all(
    entries
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const { frontmatter, content } = await loadMarkdownFile<RealisationFrontmatter>(
          path.join(realisationDir, file)
        );
        return {
          slug: file.replace(/\.md$/, ''),
          content,
          ...frontmatter
        };
      })
  );

  return items.sort((a, b) => Number(b.annee) - Number(a.annee));
}

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  Content: ReactNode;
  toc: { id: string; title: string; level: number }[];
};

function createToc(markdown: string) {
  return markdown
    .split('\n')
    .filter((line) => /^#{1,3}\s+/.test(line))
    .map((line) => {
      const match = line.match(/^(#{1,3})\s+(.*)/);
      if (!match) return null;
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\u00C0-\u017F\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      return { id, title, level };
    })
    .filter((item): item is { id: string; title: string; level: number } => Boolean(item));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await fs.readdir(blogDir);
  const posts = await Promise.all(
    entries
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(blogDir, file);
        const source = await fs.readFile(filePath, 'utf-8');
        const { content, frontmatter } = await compileMDXFromSource<BlogFrontmatter>({
          source,
          components: mdxComponents
        });
        const body = matter(source).content;
        return {
          slug: file.replace(/\.mdx$/, ''),
          Content: content,
          frontmatter,
          toc: createToc(body)
        };
      })
  );

  return posts.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  try {
    const source = await fs.readFile(filePath, 'utf-8');
    const { content, frontmatter } = await compileMDXFromSource<BlogFrontmatter>({
      source,
      components: mdxComponents
    });
    const body = matter(source).content;
    return {
      slug,
      Content: content,
      frontmatter,
      toc: createToc(body)
    } satisfies BlogPost;
  } catch (error) {
    console.error(`Unable to load blog post ${slug}`, error);
    return null;
  }
}
