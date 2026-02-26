'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInRight, scaleIn } from '@/lib/animations';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f5] relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[800px] h-[800px] rounded-full bg-[#ffd700] blur-[150px]" />
      </motion.div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <motion.h2
            variants={scaleIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            variants={fadeInRight}
            className="text-xl md:text-2xl text-[#131313] mb-12 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how AI automation can revolutionize your operations
          </motion.p>

          <motion.div
            variants={fadeInRight}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="green" href="/contact">
              Get Free Consultation
            </Button>
            <Button variant="secondary-fixed" href="/case-studies">
              View Our Work
            </Button>
          </motion.div>

          <motion.p
            variants={fadeInRight}
            className="text-sm text-[#797979] mt-8"
          >
            No credit card required • Free 30-minute consultation • Quick response time
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
