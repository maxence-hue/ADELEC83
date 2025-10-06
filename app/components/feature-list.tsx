import { Card } from './card';

export function FeatureList({
  items
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="h-full">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
