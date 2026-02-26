'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 
            variants={fadeInRight}
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
          >
            Let's Build What's Next Together.
          </motion.h2>
          <motion.p 
            variants={fadeInRight}
            className="text-2xl text-[#666666] mb-12 max-w-3xl mx-auto"
          >
            Ready to scale your engineering capabilities with a trusted global partner?
          </motion.p>
          
          <motion.div
            variants={fadeInRight}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#de362a] text-white rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-2xl"
            >
              <MessageSquare className="w-6 h-6" />
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 group border-2 border-black"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
