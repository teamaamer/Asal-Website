'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, FlaskConical, Cloud, Brain, Database, RefreshCw, Users } from 'lucide-react';
import Card from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-[#de362a]" />,
      title: 'Custom Software Development',
      description: 'Enterprise-grade software tailored to complex business needs. From web and mobile applications to enterprise systems, we build solutions that scale.',
      features: ['Full-stack development', 'Enterprise applications', 'Mobile & web platforms', 'Legacy system modernization'],
    },
    {
      icon: <Layers className="w-12 h-12 text-[#de362a]" />,
      title: 'Product Engineering',
      description: 'From concept to scalable architecture. We help you design, build, and evolve digital products with modern engineering practices.',
      features: ['Product strategy & design', 'Architecture & scalability', 'Performance optimization', 'Continuous delivery'],
    },
    {
      icon: <Brain className="w-12 h-12 text-[#de362a]" />,
      title: 'Artificial Intelligence & Data Services',
      description: 'AI development, machine learning integration, LLM/MLOps, data engineering, and data management solutions.',
      features: ['AI development & ML integration', 'LLM & generative AI', 'MLOps & model deployment', 'Data engineering & pipelines', 'Data management & governance'],
    },
    {
      icon: <Cloud className="w-12 h-12 text-[#de362a]" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud-native architectures, CI/CD pipelines, and reliability engineering for modern infrastructure.',
      features: ['Cloud migration & architecture', 'DevOps & automation', 'Infrastructure as code', 'Site reliability engineering'],
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-[#de362a]" />,
      title: 'R&D Services',
      description: 'Early exploration, prototyping, PoCs, and advanced innovation. We help you validate ideas and build next-generation solutions.',
      features: ['Technology research', 'Proof of concepts', 'Rapid prototyping', 'Innovation labs'],
    },
    {
      icon: <Database className="w-12 h-12 text-[#de362a]" />,
      title: 'QA & Testing',
      description: 'Comprehensive quality assurance and testing services to ensure reliability, performance, and security.',
      features: ['Test automation', 'Performance testing', 'Security testing', 'Quality assurance'],
    },
    {
      icon: <Users className="w-12 h-12 text-[#de362a]" />,
      title: 'Team Extension & Managed Services',
      description: 'Dedicated engineers, full managed teams, and long-term partnership models to scale your engineering capacity.',
      features: ['Dedicated development teams', 'Staff augmentation', 'Managed engineering services', 'Long-term partnerships'],
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
              Comprehensive Software Development & R&D Services
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              End-to-end engineering solutions designed to build, scale, and modernize your digital infrastructure
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#de362a]"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#de362a] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose ASAL Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Why Domain Expertise Matters
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Deep technical knowledge combined with industry experience reduces risk, accelerates delivery, and ensures solutions that truly fit your business context.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Proven Methodologies', desc: 'Battle-tested processes refined over 26 years of delivery' },
              { title: 'Security-First Approach', desc: 'ISO 27001 & 27701 certified engineering practices' },
              { title: 'Scalable Teams', desc: '450+ engineers ready to scale with your needs' }
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="text-center bg-white p-8 rounded-2xl border border-gray-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#de362a] text-white flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
