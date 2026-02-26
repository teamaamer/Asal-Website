import { Variants } from 'framer-motion';

// Exact spring animation configuration from Framer MJS files
export const springTransition = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
  mass: 1,
};

export const springTransitionFast = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 35,
  mass: 0.5,
};

export const springTransitionSlow = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 25,
  mass: 1.5,
};

// Fade in from right animation
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0.001,
    x: 20,
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: springTransition,
  },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: {
    opacity: 0.001,
  },
  visible: {
    opacity: 1,
    transition: springTransition,
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0.001,
    scale: 1.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springTransition,
      duration: 0.7,
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Text appear animation (word by word) - exact Framer timing
export const textAppear: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as any,
    },
  }),
};

// Hover scale animation
export const hoverScale = {
  scale: 1.05,
  transition: springTransitionFast,
};
