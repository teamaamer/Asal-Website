'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with ASAL was a game changer. They automated our processes, streamlined our CRM, and boosted our team's productivity in no time!",
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
    },
    {
      quote: "ASAL transformed how we handle leads. Their AI agent qualified prospects instantly and helped our sales team close deals faster than ever!",
      author: 'Michael Chen',
      role: 'Sales Director, GrowthCo',
    },
    {
      quote: "The AI agent they built saved our team hours every week and improved our response time. It feels like we hired a new team member who never sleeps!",
      author: 'Emily Rodriguez',
      role: 'Operations Manager, ScaleUp',
    },
  ];

  return (
    <section className="py-24 bg-[#f5f5f5]">
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
            className="text-4xl md:text-6xl font-bold mb-6 text-black"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeInRight}
            className="text-xl text-[#131313] max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from businesses we've helped transform
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl border border-[#e5e5e5] relative shadow-sm"
            >
              <Quote className="w-12 h-12 text-[#ffd700] mb-6 opacity-50" />
              <p className="text-[#131313] mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="text-sm text-[#797979]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
