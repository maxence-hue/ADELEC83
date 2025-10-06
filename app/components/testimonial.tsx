export function Testimonial({
  name,
  role,
  quote
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <blockquote className="text-base text-slate-700 dark:text-slate-200">“{quote}”</blockquote>
      <figcaption className="mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100">
        {name}
        <span className="block text-sm font-normal text-slate-500 dark:text-slate-400">{role}</span>
      </figcaption>
    </figure>
  );
}
