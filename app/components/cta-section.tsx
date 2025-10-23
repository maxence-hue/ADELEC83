'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryBtn?: {
    text: string
    href: string
  }
  showContact?: boolean
}

export function CTASection({
  title = "Prêt à démarrer votre projet ?",
  subtitle = "Contactez-nous pour obtenir un devis gratuit et personnalisé",
  primaryBtn = {
    text: "Demander un devis gratuit",
    href: "/contact"
  },
  showContact = true
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#0047AB] to-[#1e1e1e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryBtn.href}
              className="group bg-[#FF8C42] text-[#1e1e1e] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FF8C42]/90 transition-all flex items-center"
            >
              {primaryBtn.text}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {showContact && (
              <>
                <span className="text-white/60 hidden sm:inline">ou</span>
                <a
                  href="tel:0494XXXXXX"
                  className="flex items-center text-white hover:text-[#FF8C42] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  04 94 XX XX XX
                </a>
              </>
            )}
          </div>

          {showContact && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="mailto:contact@adelec83.fr"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@adelec83.fr
              </a>
              <span className="text-white/60 hidden sm:inline">•</span>
              <span className="text-white/80">
                Intervention rapide dans tout le Var
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
