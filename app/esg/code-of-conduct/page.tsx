'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function CodeOfConductPage() {
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
              Code of Conduct
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ethical standards and behavioral expectations for all ASAL Technologies employees
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>Our Commitment</h2>
          <p>
            ASAL Technologies is committed to maintaining the highest standards of professional conduct, integrity, and ethical behavior in all business activities.
          </p>

          <h2>Professional Conduct</h2>
          <p>
            All employees are expected to conduct themselves professionally, treat colleagues and clients with respect, and maintain a collaborative work environment.
          </p>

          <h2>Integrity & Honesty</h2>
          <p>
            We expect truthfulness in all communications, accurate reporting, and transparency in business dealings.
          </p>

          <h2>Respect & Inclusion</h2>
          <p>
            We foster a diverse and inclusive workplace free from discrimination, harassment, and bias of any kind.
          </p>

          <h2>Confidentiality</h2>
          <p>
            Employees must protect confidential information, client data, and proprietary knowledge in accordance with our security policies.
          </p>

          <h2>Conflict of Interest</h2>
          <p>
            Employees must avoid situations where personal interests conflict with company interests and disclose any potential conflicts.
          </p>

          <h2>Reporting Violations</h2>
          <p>
            We encourage reporting of any violations through appropriate channels. All reports are treated confidentially and without retaliation.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
