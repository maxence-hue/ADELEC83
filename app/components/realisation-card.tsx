'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'

interface RealisationCardProps {
  title: string
  description?: string | null
  category?: string | null
  city?: string | null
  images?: string[] | null
  testimonial?: string | null
  index?: number
}

const categoryColors = {
  electricite: 'bg-blue-100 text-blue-800',
  photovoltaique: 'bg-yellow-100 text-yellow-800',
  climatisation: 'bg-cyan-100 text-cyan-800',
  bornes: 'bg-green-100 text-green-800',
}

const categoryLabels = {
  electricite: 'Électricité',
  photovoltaique: 'Photovoltaïque',
  climatisation: 'Climatisation',
  bornes: 'Bornes IRVE',
}

export function RealisationCard({
  title,
  description,
  category,
  city,
  images,
  testimonial,
  index = 0,
}: RealisationCardProps) {
  const mainImage = images?.[0] || '/images/placeholder.jpg'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 md:h-56">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover"
        />
        {category && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category as keyof typeof categoryColors]}`}>
              {categoryLabels[category as keyof typeof categoryLabels]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        {city && (
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            {city}
          </div>
        )}

        {description && (
          <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        )}

        {testimonial && (
          <div className="pt-4 border-t">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF8C42] text-[#FF8C42]" />
              ))}
            </div>
            <p className="text-sm text-gray-600 italic">"{testimonial}"</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
