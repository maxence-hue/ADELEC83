'use client';

import Image from 'next/image';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import type { Realisation } from '@/lib/sanity';

interface RealisationCardProps {
  title?: string;
  description?: string;
  category?: string;
  location?: string;
  date?: string;
  image_url?: string;
  year?: number;
  image?: any; // Image Sanity
  index?: number;
}

export function RealisationCard({ 
  title, 
  description, 
  category, 
  location, 
  date,
  image_url,
  year,
  image,
  index = 0 
}: RealisationCardProps) {
  // Support des deux formats d'image (Sanity ou Supabase)
  const imageUrl = image_url || (image ? urlFor(image).width(800).height(600).url() : '/images/placeholder.jpg');
  const displayYear = date || (year ? String(year) : undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || 'Réalisation'}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <Badge className="absolute top-4 left-4 bg-brand-yellow text-brand-gray font-bold shadow-lg">
            {category}
          </Badge>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-brand-gray group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
            {displayYear && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{displayYear}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
