'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function CookiePolicyPage() {
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
              Cookie Policy
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we use cookies and similar technologies
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our site is used.
          </p>

          <h2>Types of Cookies</h2>
          <h3>Essential Cookies</h3>
          <p>
            Required for the website to function properly. These cannot be disabled.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            Help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            Enable enhanced functionality and personalization, such as remembering your preferences.
          </p>

          <h2>Cookie Management</h2>
          <p>
            You can control and manage cookies through your browser settings. Note that disabling cookies may affect website functionality.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            We may use third-party services like Google Analytics that set their own cookies. These are governed by the respective third-party privacy policies.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
