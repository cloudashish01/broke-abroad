'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  slug: string;
  title: string;
  destination: string;
  description: string;
  tags: string[];
  heroImage?: string;
  index: number;
}

export default function DestinationCard({ slug, title, destination, description, tags, heroImage, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/destinations/${slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1a28] border border-white/5 hover:border-[#d4a853]/30 transition-all duration-500">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'linear-gradient(135deg, #1a1a28, #2a2a3a)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a28] via-transparent to-transparent" />
            {/* Tags */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              {tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-[#d4a853]/20 text-[#d4a853] px-2 py-1 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-white group-hover:text-[#d4a853] transition-colors duration-300">
              {destination}
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              {description}
            </p>
            <div className="mt-4 flex items-center text-[#d4a853] text-sm font-medium">
              Read Guide
              <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
