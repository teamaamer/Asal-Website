'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

interface StatProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedStat({ end, suffix = '', duration = 2 }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-6xl font-bold text-[#de362a]">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 450, suffix: '+', label: 'Software Engineers and Specialists' },
    { value: 42, suffix: '%', label: 'Female Talent Representation' },
    { value: 26, suffix: ' Years', label: 'Engineering Excellence' },
    { value: 500, suffix: '+', label: 'Global Clients Served' },
    { value: 6, suffix: '', label: 'Delivery Locations Across Jordan, MENA and Europe' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ASAL in Numbers</h2>
          <p className="text-xl text-gray-600">Trusted by Global Leaders. Powered by Exceptional Talent.</p>
        </motion.div>
      </div>
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="text-center"
            >
              <div className="mb-2">
                <AnimatedStat end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-[#797979]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
