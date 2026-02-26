'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  "Teams spend too much time on repetitive tasks.",
  "Leads slip away without consistent follow-up.",
  "Outdated workflows hurt customer experience.",
  "Scaling requires more people and higher costs."
];

export default function Problems() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Box positions - closer to center: top-left, top-right, bottom-left, bottom-right
  const positions = [
    { top: '25%', left: '8%' },  // Top-left moved down
    { top: '15%', right: '8%' },
    { bottom: '10%', left: '8%' },
    { bottom: '20%', right: '8%' }  // Bottom-right moved up
  ];

  return (
    <section ref={containerRef} className="relative bg-[#f5f5f5]" style={{ height: '300vh' }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative">
        {/* Centered Heading */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1])
          }}
          className="text-center z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-black leading-[1.1] px-4">
            Eliminate the bottlenecks
            <br />
            <span className="text-black">that hold you back</span>
          </h2>
        </motion.div>

        {/* Problem Boxes - Absolute positioned within sticky container */}
        {problems.map((problem, index) => {
          const progress = (index + 1) * 0.2;
          return (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                ...positions[index],
                opacity: useTransform(
                  scrollYProgress,
                  [progress - 0.1, progress, 0.8, 1],
                  [0, 1, 1, 1]
                ),
                scale: useTransform(
                  scrollYProgress,
                  [progress - 0.1, progress],
                  [0.8, 1]
                ),
                y: useTransform(
                  scrollYProgress,
                  [progress - 0.1, progress],
                  [50, 0]
                )
              }}
              className="bg-white border-2 border-[#e5e5e5] rounded-xl p-4 md:p-6 flex items-start gap-3 md:gap-4 hover:border-[#de362a] transition-colors duration-300 w-[280px] md:w-[380px] z-20"
            >
              {/* Warning Icon */}
              <div className="flex-shrink-0 mt-0.5 md:mt-1">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#de362a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              
              {/* Text */}
              <p className="text-[14px] md:text-[17px] text-black font-normal leading-relaxed">
                {problem}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
