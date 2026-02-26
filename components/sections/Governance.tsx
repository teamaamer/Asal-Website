'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, FileCheck } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function Governance() {
  const frameworks = [
    {
      icon: <Shield className="w-12 h-12 text-[#de362a]" />,
      title: 'Project Governance',
      description: 'Structured oversight, clear accountability, and transparent reporting throughout the project lifecycle.',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#de362a]" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing, code reviews, and quality gates to ensure delivery excellence.',
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#de362a]" />,
      title: 'Risk Management',
      description: 'Proactive identification, assessment, and mitigation of technical and operational risks.',
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#de362a]" />,
      title: 'Compliance',
      description: 'Adherence to ISO 27001, ISO 27701, and industry-specific regulatory requirements.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-6">
            Governance & Quality Framework
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade processes that ensure reliability, security, and consistent delivery
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl border border-gray-200"
            >
              <div className="mb-4">{framework.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{framework.title}</h3>
              <p className="text-gray-600">{framework.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
