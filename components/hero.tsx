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
  secondaryCta?: {
    text: string;
    href: string;
  };
  badges?: string[];
  showScrollIndicator?: boolean;
}

export function Hero({ title, subtitle, image, cta, secondaryCta, badges, showScrollIndicator }: HeroProps) {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-yellow/20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue-dark/85 to-brand-yellow/30" />
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {cta && (
              <Link href={cta.href}>
                <Button 
                  size="lg" 
                  className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-gray font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {cta.text}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold shadow-lg transition-all duration-300"
                >
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
          
          {badges && badges.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/90">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>{badge}</span>
                </div>
              ))}
            </div>
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
