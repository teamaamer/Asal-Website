'use client';

import { motion } from 'framer-motion';
import { Clock, Globe, DollarSign, MessageSquare } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function NearshoreModel() {
  const advantages = [
    {
      icon: <Clock className="w-12 h-12 text-[#de362a]" />,
      title: 'Time Zone Alignment',
      description: 'Overlapping working hours with European and North American time zones for real-time collaboration.',
    },
    {
      icon: <Globe className="w-12 h-12 text-[#de362a]" />,
      title: 'Cultural Compatibility',
      description: 'Strong English proficiency and cultural alignment with Western business practices.',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#de362a]" />,
      title: 'Cost Efficiency',
      description: 'Competitive pricing without compromising on quality, security, or delivery standards.',
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#de362a]" />,
      title: 'Communication',
      description: 'Seamless communication through modern collaboration tools and agile methodologies.',
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
            Nearshore Model
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
            The strategic advantage of nearshore software development
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
