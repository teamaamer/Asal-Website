'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary-fit' | 'primary-fixed' | 'secondary-fit' | 'secondary-fixed' | 'secondary-header' | 'ghost' | 'green';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const buttonStyles: Record<ButtonVariant, string> = {
  'primary-fit': 'bg-black text-white px-5 py-3 rounded-lg font-medium text-[16px] transition-all duration-400 relative overflow-hidden group',
  'primary-fixed': 'bg-black text-white px-5 py-3 rounded-lg font-medium text-[16px] w-fit transition-all duration-400 relative overflow-hidden group',
  'secondary-fit': 'bg-white border-2 border-[#e5e5e5] text-black px-5 py-3 rounded-lg font-medium text-[16px] transition-all duration-400 relative overflow-hidden group',
  'secondary-fixed': 'bg-white border-2 border-[#e5e5e5] text-black px-5 py-3 rounded-lg font-medium text-[16px] w-fit transition-all duration-400 relative overflow-hidden group',
  'secondary-header': 'bg-white border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3.5 rounded-full font-medium text-[15px] w-fit transition-all duration-400',
  'ghost': 'bg-transparent text-black hover:text-[#de362a] px-4 py-2 font-medium text-[15px] transition-colors duration-300',
  'green': 'bg-[#ffd700] text-black hover:bg-black hover:text-[#ffd700] px-6 py-3.5 rounded-full font-medium text-[15px] transition-all duration-400',
};

export default function Button({ 
  variant = 'primary-fixed', 
  href, 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const buttonClass = `${buttonStyles[variant]} ${className} cursor-pointer inline-flex items-center justify-between gap-3`;
  const isPrimary = variant === 'primary-fit' || variant === 'primary-fixed';
  const isSecondary = variant === 'secondary-fit' || variant === 'secondary-fixed';

  const MotionButton = motion.button;
  
  const buttonContent = (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
      className={buttonClass}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className="flex-1 text-left">{children}</span>
      {isPrimary && (
        <span className="bg-[#ffd700] text-black p-2.5 rounded-md flex items-center justify-center ml-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </span>
      )}
      {isSecondary && (
        <span className="bg-[#f5f5f5] text-black p-2.5 rounded-md flex items-center justify-center ml-3 border border-[#e5e5e5]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </span>
      )}
    </MotionButton>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
