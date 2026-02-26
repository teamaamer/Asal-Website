'use client';

import { motion } from 'framer-motion';

interface DividerProps {
  className?: string;
  animated?: boolean;
}

export default function Divider({ className = '', animated = true }: DividerProps) {
  if (animated) {
    return (
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent ${className}`}
      />
    );
  }

  return <div className={`h-px bg-[#2a2a2a] ${className}`} />;
}
