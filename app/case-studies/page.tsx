'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  const caseStudies = [
    {
      title: 'Global Telecom: Network Management Platform',
      description: 'Scalable cloud-native platform supporting millions of users with 99.99% uptime.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      href: '/case-studies/telecom-network-platform',
      industry: 'Telecommunications',
      service: 'Cloud & DevOps',
      technology: 'AWS, Kubernetes',
    },
    {
      title: 'Healthcare Provider: AI-Powered Diagnostics',
      description: 'Machine learning integration improving diagnostic accuracy and patient outcomes.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      href: '/case-studies/healthcare-ai-diagnostics',
      industry: 'Healthcare',
      service: 'AI & Data Services',
      technology: 'Python, TensorFlow',
    },
    {
      title: 'Enterprise SaaS: Product Engineering Partnership',
      description: 'Embedded engineering team delivering continuous product innovation and scalability.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      href: '/case-studies/saas-product-engineering',
      industry: 'High Tech',
      service: 'Product Engineering',
      technology: 'React, Node.js',
    },
    {
      title: 'Financial Services: Data Engineering Infrastructure',
      description: 'Real-time data pipelines processing billions of transactions with enterprise-grade security.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      href: '/case-studies/fintech-data-engineering',
      industry: 'High Tech',
      service: 'AI & Data Services',
      technology: 'Apache Kafka, Spark',
    },
    {
      title: 'Logistics Platform: Cloud Migration & Modernization',
      description: 'Legacy system transformation to cloud-native architecture with improved performance.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      href: '/case-studies/logistics-cloud-migration',
      industry: 'Transportation',
      service: 'Cloud & DevOps',
      technology: 'Azure, Docker',
    },
    {
      title: 'EdTech Platform: Scalable Learning Management System',
      description: 'Custom LMS supporting millions of learners with AI-powered personalization.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      href: '/case-studies/edtech-lms-platform',
      industry: 'Education',
      service: 'Custom Software Development',
      technology: 'Next.js, PostgreSQL',
    },
  ];

  const industries = ['All', 'Telecommunications', 'Healthcare', 'High Tech', 'Transportation', 'Education'];
  const services = ['All', 'Cloud & DevOps', 'AI & Data Services', 'Product Engineering', 'Custom Software Development'];
  const technologies = ['All', 'AWS, Kubernetes', 'Python, TensorFlow', 'React, Node.js', 'Apache Kafka, Spark', 'Azure, Docker', 'Next.js, PostgreSQL'];

  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'All' || study.service === selectedService;
    const technologyMatch = selectedTechnology === 'All' || study.technology === selectedTechnology;
    return industryMatch && serviceMatch && technologyMatch;
  });

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
              Client Success Stories
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Proven engineering solutions delivering measurable business impact for global enterprises and innovative companies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Filter by Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#de362a]"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Filter by Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#de362a]"
              >
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Filter by Technology</label>
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#de362a]"
              >
                {technologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
              >
                <Card
                  title={study.title}
                  description={study.description}
                  image={study.image}
                  href={study.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Partner with ASAL
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Discuss how our engineering expertise can help you achieve your business objectives.
            </motion.p>
            <motion.div variants={fadeInRight}>
              <a
                href="/contact"
                className="inline-block bg-[#de362a] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
              >
                Get a Quote
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
