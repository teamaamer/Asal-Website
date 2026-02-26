'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TechStack() {
  const techLogos = [
    { name: 'React', logo: '/logos/React-icon.svg' },
    { name: 'Next.js', logo: '/logos/Nextjs-logo.svg' },
    { name: 'TypeScript', logo: '/logos/Typescript_logo_2020.svg' },
    { name: 'Python', logo: '/logos/python-logo-only.svg' },
    { name: 'Node.js', logo: '/logos/Node.js_logo.svg' },
    { name: 'Flutter', logo: '/logos/Google-flutter-logo.png' },
    { name: 'VS Code', logo: '/logos/Visual_Studio_Code_1.35_icon.svg' },
    { name: 'TensorFlow', logo: '/logos/Tensorflow_logo.svg' },
    { name: 'OpenAI', logo: '/logos/OpenAI_Logo.svg' },
    { name: 'AWS', logo: '/logos/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', logo: '/logos/Docker_Logo.png' },
    { name: 'MongoDB', logo: '/logos/MongoDB_Logo.svg' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-4">/TECH STACK</p>
          <h2 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-black leading-[1.1] mb-6">
            Technologies we use
          </h2>
          <p className="text-[17px] text-[#666666] max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build powerful AI automation solutions
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {duplicatedLogos.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 bg-[#f5f5f5] rounded-2xl p-8 min-w-[180px] hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#ffd700]"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-black">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
