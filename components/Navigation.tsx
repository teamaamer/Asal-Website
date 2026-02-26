'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Button from './ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(245, 245, 245, 0)', 'rgba(245, 245, 245, 0.95)']
  );

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/security-compliance', label: 'Security' },
    { href: '/esg', label: 'ESG' },
    { href: '/careers', label: 'Careers' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Insights' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
    >
      <div className="max-w-[1440px] mx-auto px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src="/asal-logo.svg" alt="ASAL Technologies" className="h-8 w-auto" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:text-[#de362a] transition-colors duration-300 font-medium text-[13px] uppercase tracking-[0.05em]"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="secondary-header" href="/contact">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden bg-[#131313] border-t border-[#2a2a2a]"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#ffd700] transition-colors duration-300 text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary-fit" href="/contact" className="w-full">
            Get a Quote
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
