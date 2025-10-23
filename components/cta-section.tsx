'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({ 
  title = "Prêt à démarrer votre projet ?", 
  subtitle = "Contactez-nous pour un devis gratuit et personnalisé"
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-gray font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <a href="tel:0494912753">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-blue transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                04 94 91 27 53
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
