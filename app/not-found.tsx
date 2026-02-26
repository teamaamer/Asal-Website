'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeInRight, scaleIn } from '@/lib/animations';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl"
      >
        <motion.div
          variants={scaleIn}
          className="mb-8"
        >
          <h1 className="text-[200px] md:text-[300px] font-bold leading-none text-[#de362a]">
            404
          </h1>
        </motion.div>

        <motion.h2
          variants={fadeInRight}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          variants={fadeInRight}
          className="text-xl text-[#e5e5e5] mb-12"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </motion.p>

        <motion.div
          variants={fadeInRight}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#131313] px-8 py-4 rounded-full font-bold transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
