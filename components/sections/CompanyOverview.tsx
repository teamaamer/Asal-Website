'use client';

import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-6">
            International Software Development & R&D Partner
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 mb-8">
            ASAL Technologies delivers enterprise-grade engineering solutions to global organizations. 
            With 26+ years of experience and 450+ engineers, we provide secure, scalable, and 
            high-performance software development services.
          </motion.p>
          <motion.p variants={fadeInRight} className="text-lg text-gray-600">
            Our nearshore delivery model, combined with ISO/IEC 27001 and 27701 certifications, 
            ensures quality, security, and seamless collaboration for CTOs, engineering directors, 
            and product leaders worldwide.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
