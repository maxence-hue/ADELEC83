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

const colorClasses = {
  blue: 'bg-brand-blue text-white',
  yellow: 'bg-brand-orange text-white',
  cyan: 'bg-brand-blue-light text-white',
  green: 'bg-brand-orange-dark text-white',
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof icons;
  href: string;
  color: keyof typeof colorClasses;
  index?: number;
}

export function ServiceCard({ title, description, iconName, href, color, index = 0 }: ServiceCardProps) {
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
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <Icon className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-brand-gray group-hover:text-brand-blue transition-colors">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="flex items-center text-brand-blue group-hover:text-brand-orange transition-colors font-medium">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
