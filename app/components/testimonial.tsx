import { Card } from './card';

export function TestimonialList({
  items
}: {
  items: { name: string; role: string; quote: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.name}>
          <p className="text-sm text-slate-600 dark:text-slate-300">“{item.quote}”</p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
