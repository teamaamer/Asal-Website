'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Code, RefreshCw } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import Link from 'next/link';

export default function CustomSoftwareDevelopmentPage() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-[#de362a]" />,
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with React, Next.js, Vue, Angular, and other leading frameworks.',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#de362a]" />,
      title: 'Mobile Applications',
      description: 'Native iOS and Android apps, cross-platform solutions with React Native and Flutter.',
    },
    {
      icon: <Database className="w-12 h-12 text-[#de362a]" />,
      title: 'Enterprise Platforms',
      description: 'Scalable enterprise systems, CRM, ERP, and custom business platforms.',
    },
    {
      icon: <Code className="w-12 h-12 text-[#de362a]" />,
      title: 'API & Backend Development',
      description: 'RESTful APIs, GraphQL, microservices architecture, and backend systems.',
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-[#de362a]" />,
      title: 'System Modernization',
      description: 'Legacy system migration, re-platforming, and technical debt reduction.',
    },
  ];

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
              Custom Software Development
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Tailored software solutions designed to meet your unique business requirements
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Build Your Solution?
            </motion.h2>
            <motion.div variants={fadeInRight}>
              <Link
                href="/contact"
                className="inline-block bg-[#de362a] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
