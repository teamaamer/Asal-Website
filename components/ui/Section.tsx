import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'dark' | 'light' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Section({ 
  children, 
  className = '', 
  background = 'dark',
  padding = 'lg' 
}: SectionProps) {
  const backgrounds = {
    dark: 'bg-[#131313]',
    light: 'bg-[#1a1a1a]',
    gradient: 'bg-gradient-to-b from-[#1a1a1a] to-[#131313]',
  };

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      {children}
    </section>
  );
}
