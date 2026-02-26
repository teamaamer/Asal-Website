'use client';

import { motion } from 'framer-motion';
import { Cpu, Heart, Radio, Truck, GraduationCap, Hotel, Sprout } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'High Tech and Software Platforms',
      description: 'We support high-tech companies and software platform providers in building scalable, secure, and high-performance systems. ASAL engineers work on complex product architectures, cloud-native platforms, and R&D services that require speed, innovation, and reliability.',
      services: 'Software development, product engineering, cloud and DevOps, quality assurance, and AI enabled systems.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Healthcare and Life Sciences',
      description: 'We work with healthcare and life sciences organizations to build secure, compliant, and reliable software systems that support patient care, operations, and research. ASAL supports innovation while maintaining high standards of quality, security, and data integrity.',
      services: 'R&D development, quality assurance, data engineering, AI enabled solutions.',
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: 'Telecommunications',
      description: 'ASAL partners with telecommunications providers to modernize platforms, enhance service reliability, and support large-scale systems. Our engineers work on performance-critical environments that require high availability, scalability, and continuous optimization.',
      services: 'R&D development, mobile application development, quality assurance, DevOps, and cloud engineering.',
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Transportation and Logistics',
      description: 'ASAL helps transportation and logistics organizations optimize operations through scalable, data-driven software solutions. We support systems that require reliability, real-time processing, and integration across complex operational environments.',
      services: 'R&D development, data engineering, DevOps, quality assurance, and cloud solutions.',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Education and E-Learning',
      description: 'We work with education providers and digital learning platforms to build engaging, scalable, and accessible learning solutions. ASAL supports innovation in education through modern software platforms and AI driven learning tools.',
      services: 'Software development, mobile applications, AI enabled platforms, product engineering, and quality assurance.',
    },
    {
      icon: <Hotel className="w-12 h-12" />,
      title: 'Hospitality and Services',
      description: 'ASAL supports hospitality and service-based organizations in delivering seamless digital experiences and operational efficiency. Our teams help modernize platforms that enhance customer engagement and streamline backend operations.',
      services: 'R&D development, quality assurance, technical support systems, and cloud engineering.',
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: 'Agriculture and Environmental Services',
      description: 'We work with organizations focused on agriculture and environmental services to develop technology solutions that support sustainability, monitoring, and data driven decision-making. ASAL engineers contribute to systems that combine software, data, and intelligent automation.',
      services: 'R&D development, quality assurance, data engineering, and AI enabled solutions.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInRight}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Engineering Solutions Across Industries That Demand Excellence
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              ASAL Technologies partners with organizations across multiple industries to design, build, and scale software platforms, R&D services, and intelligent systems.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              className="text-lg text-gray-600 max-w-3xl mx-auto mt-4"
            >
              Our industry experience enables us to understand domain-specific challenges, regulatory requirements, and performance expectations, allowing us to deliver solutions that are both technically robust and commercially relevant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#de362a] transition-colors hover:shadow-xl"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-gray-50 flex items-center justify-center text-[#de362a]">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-black mb-2">Key services include:</p>
                  <p className="text-sm text-gray-600">{industry.services}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Industry Expertise Matters
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Each industry comes with unique challenges, standards, and expectations. ASAL's experience across diverse sectors enables us to adapt quickly, reduce risk, and deliver solutions that align with both technical and business goals.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
