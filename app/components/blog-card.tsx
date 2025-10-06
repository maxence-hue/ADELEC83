import Link from "next/link";

export function BlogCard({
  post
}: {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    readingTime: string;
    tags: string[];
  };
}) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col gap-3">
        <div className="text-xs uppercase tracking-widest text-primary">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{post.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{post.author}</span>
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}
