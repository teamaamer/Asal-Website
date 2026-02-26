'use client';

import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle, Users, Award } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function InternshipProgram() {
  const benefits = [
    {
      icon: <Lightbulb className="w-10 h-10 text-[#de362a]" />,
      title: 'Real-World Experience',
      description: 'Work on actual client projects with experienced engineers.',
    },
    {
      icon: <Users className="w-10 h-10 text-[#de362a]" />,
      title: 'Mentorship',
      description: 'Dedicated mentors to guide your learning and development.',
    },
    {
      icon: <Award className="w-10 h-10 text-[#de362a]" />,
      title: 'Skill Development',
      description: 'Technical training and hands-on experience with modern technologies.',
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#de362a]" />,
      title: 'Career Opportunities',
      description: 'Potential for full-time employment upon successful completion.',
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
            Internship Programs
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Launch your career in software engineering with hands-on experience at ASAL Technologies
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white p-8 rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-6">Program Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-3">Eligibility</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Computer Science or related degree students</li>
                <li>• Strong academic performance</li>
                <li>• Passion for software engineering</li>
                <li>• Basic programming knowledge</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Application Process</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Submit resume and cover letter</li>
                <li>• Technical assessment</li>
                <li>• Interview with engineering team</li>
                <li>• Program placement</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
