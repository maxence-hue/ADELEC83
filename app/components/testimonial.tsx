import { Card } from './card';
import { Star } from 'lucide-react';

export function TestimonialList({
  items
}: {
  items: { name: string; role: string; quote: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.name}>
          <p className="text-sm text-slate-600 dark:text-slate-300">"{item.quote}"</p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function Testimonial({
  name,
  city,
  rating,
  comment
}: {
  name: string;
  city: string;
  rating: number;
  comment: string;
}) {
  return (
    <Card>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-[#FF8C42] text-[#FF8C42]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
        "{comment}"
      </p>
      <div className="border-t pt-3">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          {name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {city}
        </p>
      </div>
    </Card>
  );
}
