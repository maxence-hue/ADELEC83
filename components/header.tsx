'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: 'Bâtiments collectifs et tertiaires',
    href: '/services/batiments-collectifs-tertiaires',
    description: 'Solutions pour promoteurs et syndics'
  },
  {
    name: 'Climatisation & pompe à chaleur',
    href: '/services/climatisation',
    description: 'Confort thermique toute l\'année'
  },
  {
    name: 'Domotique & confort connecté',
    href: '/services/domotique',
    description: 'Maison intelligente et sécurisée'
  },
  {
    name: 'Bornes de recharge',
    href: '/services/bornes',
    description: 'Installation IRVE certifiée'
  },
  {
    name: 'Panneaux solaires',
    href: '/services/photovoltaique',
    description: 'Autoconsommation et économies'
  },
  {
    name: 'Dépannage & maintenance',
    href: '/contact',
    description: 'Intervention rapide 7j/7'
  }
];

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">📍 1 chemin de l'enclos, 83210 Solliès-Pont</span>
              <span>📧 contact@adelec83.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:0494912753" className="font-semibold text-white hover:text-brand-yellow transition-colors">
                04 94 91 27 53
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-blue">ADELEC</span>
            <span className="text-2xl font-bold text-brand-yellow">83</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-gray-700 hover:text-brand-blue font-medium transition-colors">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-3 hover:bg-brand-blue/5 transition-colors"
                            >
                              <div className="font-semibold text-brand-gray">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-brand-yellow text-brand-gray font-bold px-6 py-3 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-blue"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-brand-blue/5 rounded-lg font-medium"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-brand-blue/5 rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-brand-blue/5 rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block text-center bg-brand-yellow text-brand-gray font-bold px-6 py-3 rounded-lg hover:bg-brand-blue hover:text-white transition-colors mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
