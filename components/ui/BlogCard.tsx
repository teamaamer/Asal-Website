'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  href: string;
  category?: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  date,
  readTime,
  href,
  category,
}: BlogCardProps) {
  return (
    <Link href={href} className="block group">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
        className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-yellow-400 transition-colors h-full flex flex-col"
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              {category}
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 flex-1">
            {excerpt}
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-yellow-400 font-semibold">
            <span>Read More</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
