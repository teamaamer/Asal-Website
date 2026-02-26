'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Layers, FlaskConical, Cloud, Brain, Users, ArrowRight } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function CoreServices() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Enterprise-grade software tailored to complex business needs.',
    },
    {
      icon: Layers,
      title: 'Product Engineering',
      description: 'From concept to scalable architecture and deployment.',
    },
    {
      icon: Brain,
      title: 'AI & Data Engineering',
      description: 'AI development, machine learning integration, and data engineering solutions.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud-native architectures and infrastructure automation.',
    },
    {
      icon: FlaskConical,
      title: 'R&D Services',
      description: 'Early exploration, prototyping, and advanced innovation.',
    },
    {
      icon: Users,
      title: 'Team Extension',
      description: 'Dedicated engineers integrated into your team.',
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
            Core Services Overview
          </motion.h2>
          <motion.p 
            variants={fadeInRight}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Comprehensive engineering solutions designed to build, scale, and modernize your digital infrastructure.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="group p-8 bg-[#f5f5f5] rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#e5e5e5]"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-[#de362a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {service.description}
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
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#de362a] transition-all duration-300 group"
          >
            Discover Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
