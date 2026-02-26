'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function Locations() {
  const locations = [
    {
      region: 'Amman',
      description: 'Our headquarters and primary engineering hub with 450+ engineers.',
      offices: ['Amman Technology Park', 'Downtown Office'],
    },
    {
      region: 'MENA Region',
      description: 'Strategic presence across the Middle East and North Africa.',
      offices: ['Regional partnerships and delivery centers'],
    },
    {
      region: 'Europe',
      description: 'European operations supporting global client delivery.',
      offices: ['European delivery centers'],
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
            Locations
          </motion.h2>
          <motion.p variants={fadeInRight} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global presence with nearshore delivery advantages
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
            >
              <MapPin className="w-12 h-12 text-[#de362a] mb-4" />
              <h3 className="text-2xl font-bold mb-4">{location.region}</h3>
              <p className="text-gray-600 mb-4">{location.description}</p>
              <ul className="space-y-2">
                {location.offices.map((office, idx) => (
                  <li key={idx} className="text-sm text-gray-500">• {office}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
