'use client';

import { motion } from 'framer-motion';
import Accordion from '@/components/ui/Accordion';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is AI automation?',
      answer: 'AI automation uses artificial intelligence to automate repetitive tasks, make decisions, and optimize processes without human intervention. It combines machine learning, natural language processing, and other AI technologies to streamline business operations.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple automation can be deployed in 2-4 weeks, while enterprise-scale solutions may take 2-3 months. We provide a detailed timeline during the discovery phase.',
    },
    {
      question: 'What is the ROI of AI automation?',
      answer: 'Most clients see ROI within 6-12 months. Benefits include reduced operational costs (30-50%), increased productivity (40-60%), improved accuracy (90%+), and 24/7 availability. We provide detailed ROI projections for your specific use case.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer 24/7 support, regular maintenance, performance monitoring, and continuous optimization. Our team ensures your automation solutions evolve with your business needs.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We implement enterprise-grade security measures including encryption, secure APIs, compliance with GDPR/CCPA, regular security audits, and data privacy protocols. Your data security is our top priority.',
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInRight}
            className="text-xl text-[#131313] max-w-3xl mx-auto"
          >
            Everything you need to know about AI automation
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInRight}
            >
              <Accordion
                title={faq.question}
                content={faq.answer}
                defaultOpen={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
