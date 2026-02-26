'use client';

import { motion } from 'framer-motion';
import { Search, LineChart, Code, Headphones } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding business requirements and identifying strategic technology opportunities.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Architecting scalable solutions aligned with enterprise objectives.',
      icon: LineChart,
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Deploying robust systems with minimal operational disruption.',
      icon: Code,
    },
    {
      number: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring and enhancement for sustained performance.',
      icon: Headphones,
    },
  ];

  return (
    <section className="relative bg-[#F8F8F8] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 font-light">
            OUR APPROACH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black leading-[1.1] tracking-tight">
            A Proven Methodology
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[72px] left-0 right-0 h-[1px] bg-[#D0D0D0]" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.08,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2, ease: 'easeOut' }
                  }}
                  className="group relative bg-white rounded-lg border border-[#E0E0E0] p-10 hover:border-[#FED109] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                >
                  {/* Large Background Number */}
                  <div className="absolute top-6 right-6 text-[120px] font-bold text-[#F0F0F0] leading-none select-none">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <Icon 
                        className="w-10 h-10 text-black stroke-[1.5]" 
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Number */}
                    <div className="text-sm font-bold text-[#666666] mb-4 tracking-wider">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-black leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] text-[#666666] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Yellow accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FED109] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.08,
                  ease: 'easeOut'
                }}
                viewport={{ once: true }}
                className="relative bg-white rounded-lg border border-[#E0E0E0] p-8 hover:border-[#FED109] transition-all duration-300"
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-4 text-[80px] md:text-[100px] font-bold text-[#F0F0F0] leading-none select-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon 
                      className="w-8 h-8 text-black stroke-[1.5]" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Number */}
                  <div className="text-xs font-bold text-[#666666] mb-3 tracking-wider">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-black leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] md:text-[15px] text-[#666666] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
