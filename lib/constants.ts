// ASAL Brand Colors - Based on Brand Guidelines 2024
export const colors = {
  primaryYellow: '#FED109', // Pantone 109 C
  black: '#000000',
  gold: '#D9A95B',
  rosy: '#FF5277',
  turquoise: '#4AC3D6',
  gray: '#C5CDD1',
  background: '#ffffff',
  backgroundLight: '#f5f5f5',
  foreground: '#000000',
  textSecondary: '#333333',
  textMuted: '#666666',
  border: '#dddddd',
  borderHover: '#FED109',
} as const;

// Breakpoints matching Framer's responsive system
export const breakpoints = {
  mobile: '(max-width: 809.98px)',
  tablet: '(min-width: 810px) and (max-width: 1199.98px)',
  desktop: '(min-width: 1200px)',
} as const;

// Animation delays from Framer MJS files
export const animationDelays = {
  word: 0.075, // delay per word in text animations
  line: 0.075, // delay per line
  stagger: 0.1, // stagger children delay
  initial: 0.2, // initial delay before animations start
  fast: 0.3,
  medium: 0.5,
  slow: 1,
} as const;

// Z-index layers
export const zIndex = {
  navigation: 50,
  modal: 100,
  tooltip: 200,
  editorBar: 2147483647, // max z-index from Framer
} as const;

// Container max width
export const containerMaxWidth = '1240px';

// Section spacing
export const sectionSpacing = {
  mobile: '80px',
  tablet: '100px',
  desktop: '120px',
} as const;
