import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import type { Pluggable } from "unified";
import type { ReactElement } from "react";

type CompileOptions<TFrontmatter> = {
  source: string;
};

export async function compileMdx<TFrontmatter>({
  source,
}: CompileOptions<TFrontmatter>): Promise<{ content: ReactElement; frontmatter: TFrontmatter }> {
  const result = await compileMDX<TFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm as unknown as Pluggable],
        rehypePlugins: [rehypeSlug as unknown as Pluggable]
      }
    }
  });

  const element = result.content as ReactElement;

  return {
    content: element,
    frontmatter: result.frontmatter
  };
}
