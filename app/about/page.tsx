'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket, Shield } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import DeliveryModel from '@/components/sections/DeliveryModel';
import Governance from '@/components/sections/Governance';
import Locations from '@/components/sections/Locations';
import NearshoreModel from '@/components/sections/NearshoreModel';

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-[#de362a]" />,
      title: 'Engineering Quality',
      description: 'We are committed to delivering high-quality solutions through skilled engineers, proven processes, and continuous improvement.',
    },
    {
      icon: <Rocket className="w-12 h-12 text-[#de362a]" />,
      title: 'Innovation',
      description: 'We embrace change and continuously explore better ways to solve complex technical challenges.',
    },
    {
      icon: <Shield className="w-12 h-12 text-[#de362a]" />,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and ethical responsibility in everything we do.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#de362a]" />,
      title: 'Diversity & Inclusion',
      description: 'We foster an inclusive culture where diverse perspectives are respected and collaboration thrives.',
    },
    {
      icon: <Target className="w-12 h-12 text-[#de362a]" />,
      title: 'Accountability',
      description: 'We take ownership of our work, decisions, and outcomes, ensuring trust and long-term partnerships.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#de362a]" />,
      title: 'People First',
      description: 'Our people are our greatest asset. We invest in their growth, well-being, and success.',
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
              Get to Know ASAL Technologies
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Engineering Excellence Built on Experience, Talent, and Trust
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInRight}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                ASAL Technologies is a leading software development and R&D services company with a strong presence across the Middle East and Europe. Established in 2000, ASAL has grown into a trusted global technology partner.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With 450+ engineers working as an extension of global client teams, we deliver solutions through a partnership model built on collaboration, accountability, and long-term value creation.
              </p>
              <p className="text-lg text-gray-600">
                Our delivery model emphasizes seamless integration with client teams, rigorous quality standards, and a commitment to engineering excellence that has defined our work for over two decades.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#de362a] to-[#98fe00] opacity-20"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInRight} className="bg-white p-10 rounded-2xl border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To help organizations build, scale, and modernize digital solutions through reliable software engineering, applied innovation, and long-term technology partnerships.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="bg-white p-10 rounded-2xl border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a globally trusted software development and R&D partner, recognized for engineering excellence, operational reliability, and meaningful impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              What We Value
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide our work and partnerships
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl border border-gray-200 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Model */}
      <DeliveryModel />

      {/* Governance */}
      <Governance />

      {/* Locations */}
      <Locations />

      {/* Nearshore Model */}
      <NearshoreModel />

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              A Trusted Long-Term Partner
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              ASAL Technologies is more than a software vendor. We are a long-term partner to organizations that value reliability, security, and engineering excellence. Our clients trust us to deliver solutions that scale, perform, and evolve with their business needs.
            </motion.p>
            <motion.div variants={fadeInRight}>
              <a
                href="/contact"
                className="inline-block bg-[#de362a] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
