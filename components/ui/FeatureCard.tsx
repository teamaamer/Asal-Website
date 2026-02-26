'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { CheckIcon } from './Icons';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: 'default' | 'fade';
}

export default function FeatureCard({ 
  title, 
  description, 
  icon,
  variant = 'default' 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: variant === 'fade' ? 0 : 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        {icon || <CheckIcon className="w-12 h-12" color="yellow-400" />}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[#e5e5e5]">{description}</p>
    </motion.div>
  );
}
