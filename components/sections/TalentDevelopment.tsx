'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function TalentDevelopment() {
  const programs = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#de362a]" />,
      title: 'Onboarding Program',
      description: 'Comprehensive onboarding to integrate new team members into our culture and processes.',
    },
    {
      icon: <Award className="w-12 h-12 text-[#de362a]" />,
      title: 'Technical Certifications',
      description: 'Support for professional certifications in AWS, Azure, Kubernetes, and other technologies.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#de362a]" />,
      title: 'Soft Skills Training',
      description: 'Leadership, communication, and collaboration skills development programs.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#de362a]" />,
      title: 'Conference Attendance',
      description: 'Opportunities to attend industry conferences and technical events.',
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
            Talent Development Programs
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional growth opportunities
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
