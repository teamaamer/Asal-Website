'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function CareersPreview() {
  const highlights = [
    {
      icon: Users,
      stat: '450+',
      label: 'Engineers',
    },
    {
      icon: Award,
      stat: '42%',
      label: 'Female Talent',
    },
    {
      icon: TrendingUp,
      stat: '26+',
      label: 'Years Growing',
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
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeInRight}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Build Your Career with ASAL
          </motion.h2>
          <motion.p 
            variants={fadeInRight}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Join a team of exceptional engineers working on cutting-edge projects for global enterprises.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="text-center p-8 bg-[#f5f5f5] rounded-2xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#de362a] rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-black mb-2">{item.stat}</div>
                <div className="text-[#666666]">{item.label}</div>
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
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#de362a] transition-all duration-300 group"
          >
            Explore Career Opportunities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
