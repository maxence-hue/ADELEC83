'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  cta?: {
    text: string;
    href: string;
  };
  showScrollIndicator?: boolean;
}

export function Hero({ title, subtitle, image, cta, showScrollIndicator }: HeroProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue to-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {cta && (
            <Link href={cta.href}>
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {cta.text}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      )}
    </section>
  );
}
