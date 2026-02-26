'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function DataEthicsPage() {
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
              Data Ethics Policy
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles for responsible data collection, processing, and protection
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>Our Commitment</h2>
          <p>
            ASAL Technologies is committed to ethical data practices that respect privacy, ensure security, and promote responsible use of data and AI technologies.
          </p>

          <h2>Data Collection Principles</h2>
          <p>
            We collect only necessary data, obtain appropriate consent, and ensure transparency about data collection purposes and methods.
          </p>

          <h2>Data Processing & Use</h2>
          <p>
            Data is processed lawfully, fairly, and for specified purposes. We implement appropriate technical and organizational measures to protect data integrity.
          </p>

          <h2>Privacy by Design</h2>
          <p>
            Privacy considerations are integrated into system design and development from the outset, not as an afterthought.
          </p>

          <h2>AI & Algorithm Ethics</h2>
          <p>
            We develop AI systems that are fair, transparent, and accountable. We actively work to identify and mitigate algorithmic bias.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement robust security measures aligned with ISO 27001 and ISO 27701 standards to protect data from unauthorized access, loss, or misuse.
          </p>

          <h2>Individual Rights</h2>
          <p>
            We respect individual rights including access, correction, deletion, and data portability in accordance with applicable privacy regulations.
          </p>

          <h2>Accountability & Governance</h2>
          <p>
            Clear accountability structures ensure responsible data stewardship and compliance with ethical standards and legal requirements.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
