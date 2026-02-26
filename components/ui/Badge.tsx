'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
}

export default function Badge({ text, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-[#de362a] text-white',
    secondary: 'bg-[#2a2a2a] text-white',
    success: 'bg-yellow-400 text-black',
    warning: 'bg-[#ff9500] text-white',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${variants[variant]} ${className}`}
    >
      {text}
    </motion.span>
  );
}
