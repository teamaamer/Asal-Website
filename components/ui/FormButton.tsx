'use client';

import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

type ButtonState = 'default' | 'loading' | 'success' | 'error' | 'disabled';

interface FormButtonProps {
  text?: string;
  state?: ButtonState;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function FormButton({
  text = 'Send message',
  state = 'default',
  onClick,
  type = 'button',
  className = '',
}: FormButtonProps) {
  const getButtonContent = () => {
    switch (state) {
      case 'loading':
        return (
          <div className="flex items-center justify-center gap-2">
            <LoadingSpinner size={20} color="#ffffff" />
            <span>Sending...</span>
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Message Sent!</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Error - Try Again</span>
          </div>
        );
      default:
        return text;
    }
  };

  const getButtonStyles = () => {
    const baseStyles = 'w-full px-8 py-4 rounded-full font-bold transition-all duration-400';
    
    switch (state) {
      case 'loading':
        return `${baseStyles} bg-[#797979] text-white cursor-wait`;
      case 'success':
        return `${baseStyles} bg-yellow-400 text-black`;
      case 'error':
        return `${baseStyles} bg-[#de362a] text-white hover:bg-[#ff4444]`;
      case 'disabled':
        return `${baseStyles} bg-[#2a2a2a] text-[#797979] cursor-not-allowed`;
      default:
        return `${baseStyles} bg-red-600 text-white hover:bg-yellow-400 hover:text-black`;
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={state === 'loading' || state === 'disabled'}
      whileHover={state === 'default' ? { scale: 1.02 } : {}}
      whileTap={state === 'default' ? { scale: 0.98 } : {}}
      className={`${getButtonStyles()} ${className}`}
    >
      {getButtonContent()}
    </motion.button>
  );
}
