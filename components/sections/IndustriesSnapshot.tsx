'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Heart, Radio, Truck, GraduationCap, Hotel, Sprout, ArrowRight } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function IndustriesSnapshot() {
  const industries = [
    {
      icon: Cpu,
      title: 'High Tech',
      description: 'Scalable, secure product engineering for software platforms.',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Secure, compliant, and reliable healthcare systems.',
    },
    {
      icon: Radio,
      title: 'Telecommunications',
      description: 'High-availability, performance-critical platforms.',
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Real-time, scalable operational systems.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'AI-driven, scalable learning platforms.',
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Digital experience modernization.',
    },
    {
      icon: Sprout,
      title: 'Agriculture & Environmental',
      description: 'Data-driven, sustainability-focused solutions.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInRight}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Engineering Solutions Across Industries
          </motion.h2>
          <motion.p 
            variants={fadeInRight}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Deep domain expertise across sectors that demand excellence, security, and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="group p-6 bg-[#f5f5f5] rounded-xl hover:bg-[#de362a] transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#de362a]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-black group-hover:text-white transition-colors">
                  {industry.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#de362a] transition-all duration-300 group"
          >
            Explore Industries
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
