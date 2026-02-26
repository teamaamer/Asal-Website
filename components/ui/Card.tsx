'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
}

export default function Card({ title, description, image, href, icon, className = '' }: CardProps) {
  const cardContent = (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`bg-white rounded-3xl overflow-hidden border border-[#e5e5e5] hover:border-[#131313] transition-all duration-300 shadow-sm hover:shadow-2xl ${className}`}
    >
      {image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-[22px] font-bold mb-3 text-black leading-tight">{title}</h3>
        {description && (
          <p className="text-[15px] text-[#666666] line-clamp-3 leading-[1.6]">{description}</p>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
