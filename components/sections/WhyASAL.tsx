'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users2, Building2, Globe2, TrendingUp, ArrowRight } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function WhyASAL() {
  const pillars = [
    {
      icon: Users2,
      title: 'Embedded Engineering Teams',
      description: 'Our engineers work as an extension of your team, fully integrated into your processes and culture.',
    },
    {
      icon: Building2,
      title: 'Enterprise-Grade Delivery',
      description: 'Proven methodologies, rigorous quality standards, and security-first approach for mission-critical projects.',
    },
    {
      icon: Globe2,
      title: 'Nearshore Advantage',
      description: 'Strategic locations across MENA and Europe for optimal timezone alignment and cultural compatibility.',
    },
    {
      icon: TrendingUp,
      title: 'Scalability & Access to Talent',
      description: '450+ engineers ready to scale your team up or down based on project demands and business needs.',
    },
  ];

  return (
    <section className="py-24 bg-[#f5f5f5]">
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
            Built to Partner. Proven to Deliver.
          </motion.h2>
          <motion.p 
            variants={fadeInRight}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            ASAL combines deep technical expertise with a partnership-first approach, ensuring your success is our success.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="group p-10 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-[#e5e5e5]"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#de362a] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-black">
                      {pillar.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed text-lg">
                      {pillar.description}
                    </p>
                  </div>
                </div>
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
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#de362a] transition-all duration-300 group"
          >
            Learn More About Our Approach
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
