'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Certification {
  name: string
  logo?: string
  description?: string
}

interface CertificationsProps {
  certifications?: Certification[]
}

const defaultCertifications: Certification[] = [
  { name: 'RGE QualiPV', description: 'Qualification photovoltaïque' },
  { name: 'IRVE', description: 'Bornes de recharge' },
  { name: 'Qualifélec', description: 'Qualification électrique' },
  { name: 'Partenaire Enedis', description: 'Gestionnaire réseau' },
  { name: 'Partenaire EDF ENR', description: 'Énergies renouvelables' },
]

export function Certifications({ certifications = defaultCertifications }: CertificationsProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4">
            Nos Certifications & Partenaires
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des qualifications reconnues pour vous garantir un travail de qualité
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow"
            >
              {cert.logo ? (
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={80}
                  height={80}
                  className="mb-3"
                />
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-[#0047AB] to-[#FF8C42] rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-xl">
                    {cert.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <h3 className="font-semibold text-[#1e1e1e] text-sm mb-1">
                {cert.name}
              </h3>
              {cert.description && (
                <p className="text-xs text-gray-600">
                  {cert.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
