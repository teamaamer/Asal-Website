'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import JobCard from '@/components/ui/JobCard';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import TalentDevelopment from '@/components/sections/TalentDevelopment';
import InternshipProgram from '@/components/sections/InternshipProgram';

export default function CareersPage() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const locations = [
    { name: 'All Locations', description: 'View all opportunities' },
    { name: 'Jordan', description: 'Headquarters - Amman' },
    { name: 'Palestine', description: 'Tech Hub - Ramallah' },
    { name: 'Saudi Arabia', description: 'New Branch - Riyadh' },
  ];

  const jobs = [
    {
      title: 'Senior Full Stack Engineer',
      location: 'Jordan',
      type: 'Full-time',
      department: 'Engineering',
      experience: '5+ years',
    },
    {
      title: 'AI/ML Engineer',
      location: 'Palestine',
      type: 'Full-time',
      department: 'AI & Data',
      experience: '3+ years',
    },
    {
      title: 'DevOps Engineer',
      location: 'Jordan',
      type: 'Full-time',
      department: 'Cloud & DevOps',
      experience: '4+ years',
    },
    {
      title: 'Frontend Developer (React)',
      location: 'Palestine',
      type: 'Full-time',
      department: 'Engineering',
      experience: '2+ years',
    },
    {
      title: 'Solutions Architect',
      location: 'Saudi Arabia',
      type: 'Full-time',
      department: 'Engineering',
      experience: '7+ years',
    },
    {
      title: 'QA Automation Engineer',
      location: 'Jordan',
      type: 'Full-time',
      department: 'QA & Testing',
      experience: '3+ years',
    },
    {
      title: 'Data Engineer',
      location: 'Palestine',
      type: 'Full-time',
      department: 'AI & Data',
      experience: '4+ years',
    },
    {
      title: 'Backend Engineer (Node.js)',
      location: 'Saudi Arabia',
      type: 'Full-time',
      department: 'Engineering',
      experience: '3+ years',
    },
    {
      title: 'Product Manager',
      location: 'Jordan',
      type: 'Full-time',
      department: 'Product',
      experience: '5+ years',
    },
    {
      title: 'UI/UX Designer',
      location: 'Palestine',
      type: 'Full-time',
      department: 'Design',
      experience: '3+ years',
    },
    {
      title: 'Cloud Engineer (AWS)',
      location: 'Saudi Arabia',
      type: 'Full-time',
      department: 'Cloud & DevOps',
      experience: '4+ years',
    },
    {
      title: 'Mobile Developer (React Native)',
      location: 'Jordan',
      type: 'Full-time',
      department: 'Engineering',
      experience: '3+ years',
    },
  ];

  const filteredJobs = selectedLocation === 'All Locations' 
    ? jobs 
    : jobs.filter(job => job.location === selectedLocation);

  const benefits = [
    'Engineering Excellence Culture',
    'Continuous Learning & Development',
    'Diverse & Inclusive Environment',
    'Global Collaboration Opportunities',
    'Competitive Compensation',
    'Career Growth & Advancement',
    'Work-Life Balance',
    'Innovation-Driven Projects',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInRight}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Careers at ASAL
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Join a team of exceptional engineers working on cutting-edge projects for global enterprises. Build your career with a company that values engineering excellence, continuous learning, and professional growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Life at ASAL
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              At ASAL, we believe great technology is built by empowered people. Our culture emphasizes collaboration, continuous learning, diversity, and professional development.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center"
              >
                <p className="text-gray-600">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Filter Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-3xl font-bold mb-8 text-center">
              Choose Your Location
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {locations.map((location, index) => (
                <motion.button
                  key={location.name}
                  custom={index}
                  variants={fadeInRight}
                  onClick={() => setSelectedLocation(location.name)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    selectedLocation === location.name
                      ? 'border-[#de362a] bg-[#de362a] text-white'
                      : 'border-gray-200 bg-white hover:border-[#de362a]'
                  }`}
                >
                  <MapPin className={`w-8 h-8 mb-3 ${
                    selectedLocation === location.name ? 'text-white' : 'text-[#de362a]'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                  <p className={`text-sm ${
                    selectedLocation === location.name ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {location.description}
                  </p>
                  {selectedLocation === location.name && (
                    <div className="mt-3 text-sm font-semibold">
                      {location.name === 'All Locations' 
                        ? `${jobs.length} positions` 
                        : `${jobs.filter(j => j.location === location.name).length} positions`}
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Open Positions
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Find your next opportunity with ASAL
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No positions available in {selectedLocation} at the moment.</p>
                <p className="text-gray-500 mt-2">Check back soon or explore other locations.</p>
              </div>
            ) : (
              filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
              >
                <JobCard
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  department={job.department}
                  experience={job.experience}
                />
              </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Talent Development */}
      <TalentDevelopment />

      {/* Internship Program */}
      <InternshipProgram />

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Don't See Your Role?
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </motion.p>
            <motion.div variants={fadeInRight}>
              <a
                href="/contact"
                className="inline-block bg-[#de362a] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
