'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function TermsOfUsePage() {
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
              Terms of Use
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Terms and conditions for using the ASAL Technologies website
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 prose prose-lg">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the ASAL Technologies website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use our website.
          </p>

          <h2>Use of Website</h2>
          <p>
            You may use our website for lawful purposes only. You agree not to use the site in any way that violates applicable laws or regulations, infringes on intellectual property rights, or harms ASAL Technologies or third parties.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of ASAL Technologies and protected by copyright and other intellectual property laws. Unauthorized use is prohibited.
          </p>

          <h2>Limitations of Liability</h2>
          <p>
            ASAL Technologies provides this website "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use our website or services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with applicable international laws and regulations.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
