'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  readTime?: string;
  index?: number;
}

export function BlogCard({ 
  slug, 
  title, 
  description, 
  date, 
  tags = [],
  image,
  readTime = '5 min',
  index = 0
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full cursor-pointer">
          {image && (
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 2).map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="text-xs border-brand-blue text-brand-blue"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-brand-gray group-hover:text-brand-blue transition-colors line-clamp-2">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
              </div>
              
              <ArrowRight className="w-5 h-5 text-brand-blue group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
