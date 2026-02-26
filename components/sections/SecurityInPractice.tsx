'use client';

import { motion } from 'framer-motion';
import { Shield, Cloud, Key, GraduationCap, Users, AlertTriangle, RefreshCw } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function SecurityInPractice() {
  const practices = [
    {
      icon: <Shield className="w-12 h-12 text-[#de362a]" />,
      title: 'Secure SDLC',
      description: 'Security integrated throughout the software development lifecycle, from design to deployment.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-[#de362a]" />,
      title: 'Cloud Security',
      description: 'Secure cloud architecture, encryption at rest and in transit, and infrastructure hardening.',
    },
    {
      icon: <Key className="w-12 h-12 text-[#de362a]" />,
      title: 'Access Management',
      description: 'Role-based access control, multi-factor authentication, and least privilege principles.',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#de362a]" />,
      title: 'Employee Training',
      description: 'Regular security awareness training and best practices education for all team members.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#de362a]" />,
      title: 'Vendor Risk Management',
      description: 'Thorough vetting and ongoing monitoring of third-party vendors and partners.',
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#de362a]" />,
      title: 'Incident Response',
      description: 'Defined incident response procedures and rapid response protocols.',
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-[#de362a]" />,
      title: 'Business Continuity',
      description: 'Disaster recovery planning and business continuity management.',
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
            Security in Practice
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we implement security and privacy across our operations
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl border border-gray-200"
            >
              <div className="mb-4">{practice.icon}</div>
              <h3 className="text-xl font-bold mb-4">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
