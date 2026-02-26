import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// Satoshi font will be loaded via CSS from Fontshare
// Roboto Mono for code blocks
export const fontConfig = {
  satoshi: 'var(--font-satoshi)',
  inter: 'var(--font-inter)',
  robotoMono: 'var(--font-roboto-mono)',
};
