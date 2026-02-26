'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function SecurityPolicyPage() {
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
              Security Policy
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to information security and data protection
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>Security Commitment</h2>
          <p>
            ASAL Technologies is committed to maintaining the highest standards of information security. We are ISO/IEC 27001 and ISO/IEC 27701 certified, demonstrating our dedication to protecting client data and maintaining privacy.
          </p>

          <h2>Data Security Measures</h2>
          <h3>Technical Controls</h3>
          <p>
            We implement encryption, access controls, network security, and regular security assessments to protect data.
          </p>

          <h3>Organizational Controls</h3>
          <p>
            Security policies, employee training, incident response procedures, and vendor management ensure comprehensive protection.
          </p>

          <h3>Physical Security</h3>
          <p>
            Our facilities maintain controlled access, surveillance, and environmental controls.
          </p>

          <h2>Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability, please report it to our security team immediately at security@asal.com. We take all reports seriously and will respond promptly.
          </p>

          <h2>Security Updates</h2>
          <p>
            We continuously monitor and update our security practices to address emerging threats and maintain compliance with international standards.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
