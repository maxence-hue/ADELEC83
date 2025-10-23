'use client';

import { Award, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    icon: Award,
    name: 'RGE QualiPV',
    description: 'Reconnu Garant de l\'Environnement pour le photovoltaïque',
  },
  {
    icon: Award,
    name: 'QualiClimafroid',
    description: 'Certification pour l\'installation de climatisation',
  },
  {
    icon: Award,
    name: 'IRVE',
    description: 'Qualification pour les bornes de recharge électrique',
  },
  {
    icon: Shield,
    name: 'Garantie Décennale',
    description: 'Protection complète de vos installations',
  },
];

export function Certifications() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-gray mb-4">
            Certifications & Qualifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des garanties professionnelles pour votre sérénité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-brand-gray mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">
              Assurance responsabilité civile professionnelle
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
