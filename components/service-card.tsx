'use client';

import Link from 'next/link';
import { Card } from './ui/card';
import { Zap, Sun, Wind, Battery, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = {
  zap: Zap,
  sun: Sun,
  wind: Wind,
  battery: Battery,
};

const iconColors = {
  blue: 'text-brand-blue',
  yellow: 'text-brand-yellow',
  cyan: 'text-cyan-500',
  green: 'text-green-500',
};

const bgColors = {
  blue: 'bg-brand-blue/10 group-hover:bg-brand-blue',
  yellow: 'bg-brand-yellow/10 group-hover:bg-brand-yellow',
  cyan: 'bg-cyan-500/10 group-hover:bg-cyan-500',
  green: 'bg-green-500/10 group-hover:bg-green-500',
};

interface ServiceCardProps {
  number?: string;
  title: string;
  description: string;
  iconName: keyof typeof icons;
  href: string;
  color: keyof typeof bgColors;
  index?: number;
}

export function ServiceCard({ number, title, description, iconName, href, color, index = 0 }: ServiceCardProps) {
  const Icon = icons[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-blue/20 group cursor-pointer overflow-hidden relative">
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-xl ${bgColors[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon className={`w-7 h-7 ${iconColors[color]} group-hover:text-white transition-colors`} />
              </div>
              {number && (
                <div className="text-5xl font-bold text-brand-blue/10 group-hover:text-brand-yellow/20 transition-colors">
                  {number}
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-brand-gray group-hover:text-brand-blue transition-colors leading-tight">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              {description}
            </p>
            
            <div className="flex items-center text-brand-blue group-hover:text-brand-yellow transition-colors font-medium text-sm">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
