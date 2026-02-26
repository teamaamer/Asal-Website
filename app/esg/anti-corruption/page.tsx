'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function AntiCorruptionPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 variants={fadeInRight} className="text-5xl md:text-7xl font-bold mb-6">
              Anti-Corruption Policy
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zero-tolerance approach to bribery, corruption, and unethical business practices
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>Policy Statement</h2>
          <p>
            ASAL Technologies maintains a zero-tolerance policy toward bribery, corruption, and any form of unethical business practice. We are committed to conducting business with integrity and in compliance with all applicable anti-corruption laws.
          </p>

          <h2>Prohibited Activities</h2>
          <p>
            Employees are prohibited from offering, promising, giving, accepting, or soliciting bribes, kickbacks, or improper payments of any kind.
          </p>

          <h2>Gifts & Hospitality</h2>
          <p>
            Gifts and hospitality must be reasonable, transparent, and comply with company guidelines. Any gifts exceeding defined thresholds must be reported and approved.
          </p>

          <h2>Third-Party Due Diligence</h2>
          <p>
            We conduct appropriate due diligence on business partners, vendors, and intermediaries to ensure they adhere to our anti-corruption standards.
          </p>

          <h2>Reporting & Whistleblowing</h2>
          <p>
            Employees are encouraged to report suspected corruption through confidential channels. Whistleblowers are protected from retaliation.
          </p>

          <h2>Training & Awareness</h2>
          <p>
            Regular training is provided to ensure all employees understand anti-corruption requirements and their responsibilities.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
