import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Container({ children, className = '', size = 'xl' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1240px]',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
