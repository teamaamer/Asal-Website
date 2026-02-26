'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Security & Compliance', href: '/security-compliance' },
      { label: 'ESG & Corporate Responsibility', href: '/esg' },
    ],
    resources: [
      { label: 'Careers', href: '/careers' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog & Insights', href: '/blog' },
      { label: 'Get a Quote', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Cookie Policy', href: '/legal/cookie-policy' },
      { label: 'Terms of Use', href: '/legal/terms-of-use' },
      { label: 'Security Policy', href: '/legal/security-policy' },
    ],
  };

  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/asal-logo.svg" alt="ASAL Technologies" className="h-10 w-auto" />
            </div>
            <p className="text-[#666666] mb-6 text-[15px]">
              A global software development and R&D partner delivering secure, scalable, and high-performance engineering solutions.
            </p>
            <div className="mb-6">
              <p className="text-[#666666] text-[13px] font-semibold mb-2">Locations</p>
              <p className="text-[#666666] text-[15px]">Amman | MENA | Europe</p>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/asal-technologies" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#de362a] transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 9.306 9.846 L 9.306 4.572 C 9.306 1.98 8.748 0 5.724 0 C 4.266 0 3.294 0.792 2.898 1.548 L 2.862 1.548 L 2.862 0.234 L 0 0.234 L 0 9.846 L 2.988 9.846 L 2.988 5.076 C 2.988 3.816 3.222 2.61 4.77 2.61 C 6.3 2.61 6.318 4.032 6.318 5.148 L 6.318 9.828 L 9.306 9.828 Z" transform="translate(6.895 6.354)"/>
                  <path d="M 0 0 L 2.988 0 L 2.988 9.612 L 0 9.612 Z" transform="translate(2.035 6.588)"/>
                  <path d="M 1.728 0 C 0.774 0 0 0.774 0 1.728 C 0 2.682 0.774 3.474 1.728 3.474 C 2.682 3.474 3.456 2.682 3.456 1.728 C 3.456 0.774 2.682 0 1.728 0 Z" transform="translate(1.801 1.8)"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-black">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#666666] hover:text-[#de362a] transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-black">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#666666] hover:text-[#de362a] transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-black">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#666666] hover:text-[#de362a] transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#666666]">
              © 2026 ASAL Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/legal/privacy-policy" className="text-sm text-[#666666] hover:text-[#de362a] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-use" className="text-sm text-[#666666] hover:text-[#de362a] transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
