'use client';

import { motion } from 'framer-motion';
import { Hotel, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import Link from 'next/link';

export default function HospitalityPage() {
  const challenges = [
    'Guest experience management',
    'Booking and reservation systems',
    'Operations and staff coordination',
    'Revenue management and analytics',
  ];

  const solutions = [
    'Custom booking platforms',
    'Guest management systems',
    'Mobile applications',
    'Analytics and business intelligence',
  ];

  const services = [
    'Custom Software Development',
    'Product Engineering',
    'AI & Data Services',
    'Cloud & DevOps',
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
              Hospitality & Services
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Digital solutions for hotels, restaurants, and service industries
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
            <Hotel className="w-10 h-10 text-[#de362a]" />
            Industry Overview
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hospitality businesses require technology that enhances guest experiences, streamlines operations, and drives revenue. ASAL builds custom platforms for booking, guest management, and operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
            <AlertTriangle className="w-10 h-10 text-[#de362a]" />
            Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-lg font-semibold">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
            <CheckCircle className="w-10 h-10 text-[#de362a]" />
            ASAL Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-lg font-semibold">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
            <Wrench className="w-10 h-10 text-[#de362a]" />
            Relevant Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Regulatory Considerations</h2>
          <p className="text-lg text-gray-600 mb-8">
            Payment security (PCI DSS), data privacy regulations, and industry-specific compliance standards.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Enhance Guest Experiences?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#de362a] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
