import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { MDXComponents } from 'mdx/types';
import type { Pluggable } from 'unified';

const gfm = remarkGfm as unknown as Pluggable;

export type MarkdownDocument<TFrontMatter> = {
  frontmatter: TFrontMatter;
  content: string;
  raw: string;
  filePath: string;
};

export async function loadMarkdownFile<TFrontMatter extends Record<string, unknown>>(
  filePath: string
): Promise<MarkdownDocument<TFrontMatter>> {
  const absolute = path.resolve(filePath);
  const raw = await fs.readFile(absolute, 'utf-8');
  const { data, content } = matter(raw);

  return {
    frontmatter: data as TFrontMatter,
    content,
    raw,
    filePath: absolute
  };
}

export async function compileMDXFromSource<TFrontMatter extends Record<string, unknown>>({
  source,
  components
}: {
  source: string;
  components?: MDXComponents;
}) {
  const result = await compileMDX<TFrontMatter>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [gfm]
      }
    }
  });

  return {
    ...result,
    frontmatter: result.frontmatter
  };
}

export async function compileMDXFromFile<TFrontMatter extends Record<string, unknown>>({
  filePath,
  components
}: {
  filePath: string;
  components?: MDXComponents;
}) {
  const absolute = path.resolve(filePath);
  const source = await fs.readFile(absolute, 'utf-8');
  return compileMDXFromSource<TFrontMatter>({ source, components });
}
