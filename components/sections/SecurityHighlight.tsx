'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, FileCheck, ArrowRight } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function SecurityHighlight() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#131313] to-[#2a2a2a] text-white">
      <div className="max-w-[1440px] mx-auto px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInRight}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <Shield className="w-5 h-5 text-[#de362a]" />
            <span className="text-sm font-semibold uppercase tracking-wide">Security & Compliance</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInRight}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Partner with Trust. Partner with ASAL.
          </motion.h2>
          <motion.p 
            variants={fadeInRight}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            ISO/IEC 27001 & ISO/IEC 27701 certified. Security and privacy engineered into every solution.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div
            variants={fadeInRight}
            custom={0}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#de362a] rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">ISO/IEC 27001</h3>
            <p className="text-white/70 leading-relaxed">
              Information Security Management System ensuring confidentiality, integrity, and availability of your data.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            custom={1}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#de362a] rounded-xl flex items-center justify-center mb-4">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">ISO/IEC 27701</h3>
            <p className="text-white/70 leading-relaxed">
              Privacy Information Management System for responsible handling of personal data and compliance.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            custom={2}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#de362a] rounded-xl flex items-center justify-center mb-4">
              <FileCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Security-First Culture</h3>
            <p className="text-white/70 leading-relaxed">
              Security embedded across SDLC, infrastructure, access control, and continuous monitoring.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/security-compliance"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#de362a] hover:text-white transition-all duration-300 group"
          >
            Learn About Our Certifications
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
