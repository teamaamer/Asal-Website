'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Award, Clock } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  department?: string;
  experience?: string;
  onClick?: () => void;
}

export default function JobCard({ title, location, type, department, experience, onClick }: JobCardProps) {
  return (
    <motion.div
      whileHover={{ x: 8, borderColor: 'yellow-400' }}
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      onClick={onClick}
      className="bg-white p-6 rounded-xl border border-gray-200 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{type}</span>
            </div>
            {department && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>{department}</span>
              </div>
            )}
            {experience && (
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{experience}</span>
              </div>
            )}
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap"
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
}
