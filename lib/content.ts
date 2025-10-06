import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { MDXContent } from "mdx/types";
import { compileMdx } from "./mdx";
import type { ReactElement } from "react";
import { serviceOrder } from "./config";

const rootDir = process.cwd();
const servicesDir = path.join(rootDir, "content", "services");
const blogDir = path.join(rootDir, "content", "blog");
const realisationsDir = path.join(rootDir, "content", "realisations");

export type Heading = {
  id: string;
  text: string;
  level: number;
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

export type ServiceSummary = ServiceFrontmatter & {
  slug: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  services: string[];
};

export type BlogSummary = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type ServiceDetail = {
  slug: string;
  frontmatter: ServiceFrontmatter;
  content: ReactElement;
  headings: Heading[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: ReactElement;
  headings: Heading[];
};

export type RealisationFrontmatter = {
  title: string;
  description: string;
  ville: string;
  annee: number;
  tags: string[];
};

function slugFromFilename(filename: string) {
  return filename.replace(/\.(md|mdx)$/i, "");
}

function sortByServiceOrder<T extends { slug: string }>(items: T[]) {
  return items.sort((a, b) => {
    const indexA = serviceOrder.indexOf(a.slug);
    const indexB = serviceOrder.indexOf(b.slug);
    if (indexA === -1 && indexB === -1) return a.slug.localeCompare(b.slug);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
}

function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(###?|####)\s+(.*)$/gm;
  const headings: Heading[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const [, hashes, title] = match;
    const level = hashes.length;
    const text = title.trim();
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}

export async function getServices(): Promise<ServiceSummary[]> {
  const entries = await fs.readdir(servicesDir);
  const services = await Promise.all(
    entries
      .filter((file) => file.endsWith(".md"))
      .map(async (file): Promise<ServiceSummary> => {
        const filePath = path.join(servicesDir, file);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContent);
        const serviceData = data as ServiceFrontmatter;
        return {
          slug: slugFromFilename(file),
          ...serviceData
        };
      })
  );

  return sortByServiceOrder(services);
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail> {
  const filePath = path.join(servicesDir, `${slug}.md`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const parsed = matter(fileContent);
  const { content } = parsed;
  const { content: mdxContent, frontmatter } = await compileMdx<ServiceFrontmatter>({
    source: fileContent
  });

  return {
    slug,
    frontmatter,
    content: mdxContent,
    headings: extractHeadings(content)
  };
}

export async function getRealisations(): Promise<(RealisationFrontmatter & { slug: string })[]> {
  const entries = await fs.readdir(realisationsDir);
  const realisations = await Promise.all(
    entries
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(realisationsDir, file);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContent);
        const realisationData = data as RealisationFrontmatter;
        return {
          slug: slugFromFilename(file),
          ...realisationData
        };
      })
  );

  return realisations.sort((a, b) => b.annee - a.annee);
}

export async function getRealisationBySlug(slug: string) {
  const filePath = path.join(realisationsDir, `${slug}.md`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return {
    slug,
    frontmatter: data as RealisationFrontmatter,
    content,
    headings: extractHeadings(content)
  };
}

export async function getBlogPosts(): Promise<BlogSummary[]> {
  const entries = await fs.readdir(blogDir);
  const posts = await Promise.all(
    entries
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file): Promise<BlogSummary> => {
        const filePath = path.join(blogDir, file);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);
        const blogData = data as BlogFrontmatter;
        return {
          slug: slugFromFilename(file),
          ...blogData,
          readingTime: readingTime(content).text
        };
      })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content } = matter(fileContent);
  const { content: mdxContent, frontmatter } = await compileMdx<BlogFrontmatter>({
    source: fileContent
  });

  return {
    slug,
    frontmatter,
    content: mdxContent,
    headings: extractHeadings(content)
  };
}
