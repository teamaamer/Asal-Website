'use client';

import { motion } from 'framer-motion';
import { Users, Lightbulb, Shield, Globe, TrendingUp, Heart } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function Difference() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Embedded Engineering Partnership',
      description: 'We do not work at arm\'s length. ASAL engineers integrate seamlessly into your teams, tools, and workflows, operating as an extension of your in-house organization. Our team extension and managed service models ensure alignment, transparency, and shared ownership of outcomes.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Deep Technical and R&D Expertise',
      description: 'Engineering excellence is at the core of ASAL. Our teams bring hands-on expertise across software development, product engineering, cloud, DevOps, data engineering, and advanced R&D domains. We support complex, high-impact initiatives for global enterprises.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Grade Delivery and Reliability',
      description: 'Global clients trust ASAL with mission-critical systems. Stable teams with low employee turnover, proven delivery frameworks, strong focus on quality, security, and compliance. Our delivery model is built to support long-term engagements without disruption.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Nearshore Advantage with Global Standards',
      description: 'ASAL offers the benefits of nearshore software development without compromise. Clients gain access to highly skilled engineering talent, cost efficiency, and time zone compatibility, while maintaining international standards, cultural alignment, and strong communication.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalability and Access to Talent',
      description: 'Our size, structure, and talent pipeline allow us to scale teams quickly and efficiently. Whether you need a single specialist or a fully dedicated engineering team, ASAL can rapidly align the right skills and capacity to meet evolving business demands.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Diversity, Culture, and Global Mindset',
      description: 'Our teams work with clients across multiple regions, industries, and cultures. This exposure enables us to understand diverse business needs and collaborate effectively in global environments. We foster a culture of accountability, inclusion, and continuous learning.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#ffd700] blur-[200px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInRight}
            className="text-4xl md:text-6xl font-bold mb-6 text-black"
          >
            Built to Partner. Proven to Deliver.
          </motion.h2>
          <motion.p
            variants={fadeInRight}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At ASAL Technologies, we go beyond traditional outsourcing. We operate as a long-term technology partner, embedding our engineering excellence, operational discipline, and delivery mindset directly into our clients' success.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              whileHover={{ y: -8 }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full hover:border-asal-yellow transition-colors">
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-50 flex items-center justify-center text-asal-yellow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
