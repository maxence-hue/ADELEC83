'use client';

import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  author_name: string;
  location?: string;
  rating: number;
  content: string;
  index?: number;
}

export function Testimonial({ author_name, location, rating, content, index = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 relative">
        <Quote className="absolute top-4 right-4 w-12 h-12 text-brand-orange/10" />
        
        <div className="relative z-10">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating
                    ? 'fill-brand-orange text-brand-orange'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            &ldquo;{content}&rdquo;
          </p>
          
          <div className="border-t pt-4">
            <p className="font-bold text-brand-gray">{author_name}</p>
            {location && <p className="text-sm text-gray-500">{location}</p>}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
