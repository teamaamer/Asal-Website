'use client';

import { motion } from 'framer-motion';
import { Users, Target, Briefcase } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function DeliveryModel() {
  const models = [
    {
      icon: <Users className="w-12 h-12 text-[#de362a]" />,
      title: 'Embedded Teams',
      description: 'Engineers integrated directly into your product teams, working as an extension of your organization.',
    },
    {
      icon: <Target className="w-12 h-12 text-[#de362a]" />,
      title: 'Dedicated Teams',
      description: 'Fully managed teams focused exclusively on your projects with dedicated resources.',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#de362a]" />,
      title: 'Managed Services',
      description: 'End-to-end project delivery with full accountability and defined outcomes.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-6">
            Delivery Model
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible engagement models designed to meet your specific needs
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {models.map((model, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">{model.icon}</div>
              <h3 className="text-xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-600">{model.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
