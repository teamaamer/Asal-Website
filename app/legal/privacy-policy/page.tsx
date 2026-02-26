'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              How ASAL Technologies collects, uses, and protects your personal information
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>Information Collection</h2>
          <p>
            ASAL Technologies collects personal information that you provide directly to us, including name, email address, company information, and project details when you submit inquiries or request quotes.
          </p>

          <h2>Information Use</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide services, improve our offerings, and communicate with you about our services and updates.
          </p>

          <h2>Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our practices align with ISO/IEC 27001 and ISO/IEC 27701 standards.
          </p>

          <h2>User Rights</h2>
          <p>
            You have the right to access, correct, delete, or restrict the processing of your personal data. You may also object to processing or request data portability where applicable under GDPR and other privacy regulations.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance user experience, analyze site usage, and support our marketing efforts. See our Cookie Policy for more details.
          </p>

          <h2>Third Parties</h2>
          <p>
            We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and conducting business, under strict confidentiality agreements.
          </p>

          <h2>Updates</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
