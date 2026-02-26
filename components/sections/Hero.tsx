'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import Video from '../ui/Video';
import { fadeInRight, staggerContainer, textAppear } from '@/lib/animations';

export default function Hero() {
  const titleLine1 = "Engineered for";
  const titleLine2 = "Innovation";
  const wordsLine1 = titleLine1.split(' ');
  const wordsLine2 = titleLine2.split(' ');

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-24 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-12 relative z-10 w-full">
        {/* ASAL Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src="/asal-logo.svg"
            alt="ASAL Technologies"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-3"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] text-black tracking-tight">
            <div>
              {wordsLine1.map((word, i) => (
                <motion.span
                  key={`line1-${i}`}
                  custom={i}
                  variants={textAppear}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div>
              {wordsLine2.map((word, i) => (
                <motion.span
                  key={`line2-${i}`}
                  custom={i + wordsLine1.length}
                  variants={textAppear}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - 3D Illustration */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* 3D Illustration Video - Wider */}
            <motion.div
              variants={fadeInRight}
              className="relative w-full max-w-2xl"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Video
                  src="/images/hero-3d.mp4"
                  autoplay={true}
                  loop={true}
                  muted={true}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Trust Badge, Description & Buttons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 pt-4"
          >
            {/* Trust Badge - Moved to top */}
            <motion.div
              variants={fadeInRight}
              className="space-y-4"
            >
              <span className="font-mono uppercase tracking-wide text-sm text-[#666666]">TRUSTED BY THE BEST</span>
              
              {/* Logo Carousel */}
              <div className="relative overflow-hidden">
                <div className="flex gap-8 animate-scroll-hero">
                  {[
                    { name: 'Apple', logo: '/logos/Apple_logo_black.svg' },
                    { name: 'Alcatel', logo: '/logos/Alcatel_Lucent_Enterprise_Logo.svg' },
                    { name: 'Cadence', logo: '/logos/Cadence-Logo.svg' },
                    { name: 'Synopsys', logo: '/logos/Synopsys_Logo.svg' },
                    { name: 'Apple', logo: '/logos/Apple_logo_black.svg' },
                    { name: 'Alcatel', logo: '/logos/Alcatel_Lucent_Enterprise_Logo.svg' },
                    { name: 'Cadence', logo: '/logos/Cadence-Logo.svg' },
                    { name: 'Synopsys', logo: '/logos/Synopsys_Logo.svg' },
                  ].map((company, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg px-6 py-4 min-w-[140px] h-[60px] border border-[#e5e5e5]"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              variants={fadeInRight}
              className="mb-4"
            >
              <p className="text-2xl md:text-3xl font-semibold text-[#666666]">
                Global Software Development & R&D Partner
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInRight}
              className="text-[19px] md:text-[21px] text-[#131313] leading-[1.6] font-normal text-justify"
            >
              ASAL Technologies is a global software development and R&D partner delivering secure, scalable, and high-performance engineering solutions to enterprises and innovative companies worldwide.
            </motion.p>

            {/* CTA Buttons - Side by side on mobile */}
            <motion.div
              variants={fadeInRight}
              className="flex flex-row gap-3"
            >
              <Button variant="primary-fixed" href="/services" className="text-sm sm:text-base whitespace-nowrap">
                <span className="hidden sm:inline">Explore Services</span>
                <span className="sm:hidden">Services</span>
              </Button>
              <Button variant="secondary-fixed" href="/contact" className="text-sm sm:text-base whitespace-nowrap">
                Talk to an Expert
              </Button>
            </motion.div>

            {/* Showreel Video - After CTAs on mobile, hidden on desktop */}
            <motion.div
              variants={fadeInRight}
              className="relative rounded-2xl overflow-hidden shadow-2xl w-full lg:hidden"
            >
              <Video
                src="https://framerusercontent.com/assets/showreel-video.mp4"
                poster="https://framerusercontent.com/images/video-poster.jpg"
                autoplay={false}
                loop={true}
                muted={true}
                className="w-full aspect-video"
              />
              <div className="absolute top-3 left-3 bg-[#ffd700] text-black px-2.5 py-1 rounded-full text-xs font-bold uppercase">
                SHOWREEL
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-hero {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-hero {
          animation: scroll-hero 10s linear infinite;
        }

        .animate-scroll-hero:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
