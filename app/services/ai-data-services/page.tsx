'use client';

import { motion } from 'framer-motion';
import { Brain, Database, BarChart, Shield } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import Link from 'next/link';

export default function AIDataServicesPage() {
  const aiServices = [
    {
      title: 'AI-Enabled Applications',
      description: 'Intelligent applications with AI capabilities integrated into core functionality.',
    },
    {
      title: 'Machine Learning Integration',
      description: 'ML model development, training, and deployment into production systems.',
    },
    {
      title: 'LLM Implementation',
      description: 'Large language model integration, fine-tuning, and prompt engineering.',
    },
    {
      title: 'MLOps / LLMOps',
      description: 'Model lifecycle management, monitoring, and continuous improvement.',
    },
  ];

  const dataEngineering = [
    {
      title: 'Data Pipelines',
      description: 'Automated data ingestion, transformation, and delivery pipelines.',
    },
    {
      title: 'ETL / ELT',
      description: 'Extract, transform, load processes for data warehousing and analytics.',
    },
    {
      title: 'Data Governance',
      description: 'Data quality, lineage, cataloging, and compliance management.',
    },
    {
      title: 'Data Quality',
      description: 'Validation, cleansing, and monitoring of data accuracy and completeness.',
    },
  ];

  const dataManagement = [
    {
      title: 'Data Lifecycle',
      description: 'End-to-end data management from creation to archival.',
    },
    {
      title: 'Compliance',
      description: 'GDPR, CCPA, and regulatory compliance for data handling.',
    },
    {
      title: 'Cost Optimization',
      description: 'Storage optimization, query performance, and infrastructure efficiency.',
    },
    {
      title: 'Business Intelligence',
      description: 'Analytics, reporting, and data visualization solutions.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 variants={fadeInRight} className="text-5xl md:text-7xl font-bold mb-6">
              Artificial Intelligence & Data Services
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              AI development, data engineering, and intelligent data management
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Brain className="w-10 h-10 text-[#de362a]" />
              AI Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Database className="w-10 h-10 text-[#de362a]" />
              Data Engineering
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataEngineering.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <BarChart className="w-10 h-10 text-[#de362a]" />
              Data Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataManagement.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Leverage AI & Data?
            </motion.h2>
            <motion.div variants={fadeInRight}>
              <Link
                href="/contact"
                className="inline-block bg-[#de362a] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
