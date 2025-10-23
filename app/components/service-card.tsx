'use client'

import { motion } from 'framer-motion'
import { Zap, Sun, Wind, BatteryCharging } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  iconName: 'zap' | 'sun' | 'wind' | 'battery'
  href: string
  color: 'blue' | 'yellow' | 'cyan' | 'green'
  index?: number
}

const iconMap = {
  zap: Zap,
  sun: Sun,
  wind: Wind,
  battery: BatteryCharging,
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 hover:bg-blue-100',
    icon: 'bg-blue-500',
    text: 'text-blue-900',
  },
  yellow: {
    bg: 'bg-yellow-50 hover:bg-yellow-100',
    icon: 'bg-yellow-500',
    text: 'text-yellow-900',
  },
  cyan: {
    bg: 'bg-cyan-50 hover:bg-cyan-100',
    icon: 'bg-cyan-500',
    text: 'text-cyan-900',
  },
  green: {
    bg: 'bg-green-50 hover:bg-green-100',
    icon: 'bg-green-500',
    text: 'text-green-900',
  },
}

export function ServiceCard({
  title,
  description,
  iconName,
  href,
  color,
  index = 0,
}: ServiceCardProps) {
  const colors = colorClasses[color]
  const Icon = iconMap[iconName]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <div className={`p-6 rounded-xl ${colors.bg} transition-all cursor-pointer group`}>
          <div className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>
            {title}
          </h3>
          <p className="text-gray-700">
            {description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-gray-600 group-hover:text-gray-800">
            En savoir plus
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
