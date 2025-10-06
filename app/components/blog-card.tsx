import Link from 'next/link';
import { Card } from './card';

export function BlogCard({
  slug,
  title,
  description,
  date,
  tags
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-wide text-brand-blue">{new Date(date).toLocaleDateString('fr-FR')}</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Link className="mt-6 inline-flex text-sm font-semibold text-brand-blue" href={`/blog/${slug}`}>
        Lire l'article →
      </Link>
    </Card>
  );
}
