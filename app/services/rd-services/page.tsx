'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, FlaskConical, Target } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import Link from 'next/link';

export default function RDServicesPage() {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-[#de362a]" />,
      title: 'Early Exploration',
      description: 'Technology research, feasibility studies, and market analysis.',
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-[#de362a]" />,
      title: 'Proof of Concept',
      description: 'Rapid prototyping to validate technical approaches and business hypotheses.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-[#de362a]" />,
      title: 'Innovation Projects',
      description: 'Experimental development of new technologies and innovative solutions.',
    },
    {
      icon: <Target className="w-12 h-12 text-[#de362a]" />,
      title: 'Technology Assessment',
      description: 'Evaluation of emerging technologies and their business applicability.',
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
              Research & Development Services
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Innovation, experimentation, and technology exploration
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              Ready to Innovate?
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
