'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Users, Database, AlertCircle } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';
import SecurityInPractice from '@/components/sections/SecurityInPractice';

export default function SecurityCompliancePage() {
  const certifications = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'ISO/IEC 27001 – Information Security Management',
      description: 'ISO/IEC 27001 is the internationally recognized standard for establishing, implementing, maintaining, and continuously improving an Information Security Management System (ISMS).',
      commitment: [
        'Confidential information is protected from unauthorized access.',
        'Systems and infrastructure are safeguarded against security threats.',
        'Risks are proactively identified, assessed, and mitigated.',
        'Security controls are continuously monitored and improved.',
      ],
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'ISO/IEC 27701 – Privacy Information Management',
      description: 'ISO/IEC 27701 extends ISO 27001 by focusing on privacy and personal data protection.',
      commitment: [
        'Responsible handling of personal and sensitive data.',
        'Compliance with global privacy regulations and best practices.',
        'Transparency in how personal data is collected, processed, and stored.',
        'Strengthening trust with clients, partners, and end users.',
      ],
    },
  ];

  const commitmentAreas = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Software Development Life Cycles',
      description: 'Security and privacy integrated into every phase of development',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Infrastructure and Cloud Environments',
      description: 'Secure cloud infrastructure with robust access controls',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Internal Operations and Access Management',
      description: 'Strict access policies and role-based permissions',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Employee Awareness and Security Training',
      description: 'Continuous training and security awareness programs',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Slogan */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInRight}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl text-[#de362a] font-bold mb-4">
                Partner with Trust. Partner with ASAL.
              </p>
            </motion.div>
            <motion.h1
              variants={fadeInRight}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Security & Compliance
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Our commitment to protecting information, privacy, and client trust.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              At ASAL, we don't just talk about security and privacy—we engineer it into the very fabric of our partnerships.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              className="text-lg text-gray-600 leading-relaxed"
            >
              ASAL Technologies is proud to be certified under ISO/IEC 27001 and ISO/IEC 27701, reflecting our unwavering commitment to information security and data privacy. These certifications represent a significant milestone in our continuous effort to protect our clients' data, systems, and digital assets while maintaining the highest international standards of security and compliance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ISO Certifications Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our ISO Certifications
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#de362a] transition-colors hover:shadow-xl"
              >
                <div className="w-20 h-20 mb-6 rounded-full bg-gray-50 flex items-center justify-center text-[#de362a]">
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{cert.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                <div className="space-y-3">
                  <p className="font-semibold text-black">This certification demonstrates ASAL Technologies' commitment to:</p>
                  <ul className="space-y-2">
                    {cert.commitment.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#de362a] mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment in Practice */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Commitment to Security & Privacy
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Security and privacy at ASAL Technologies are not one-time achievements—they are ongoing responsibilities.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {commitmentAreas.map((area, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-[#de362a]">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our approach ensures that security and privacy are integrated into every solution we design, build, and deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security in Practice */}
      <SecurityInPractice />

      {/* ISO Certificates Download Section */}
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
              ISO Certifications
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              For transparency and assurance, our official ISO certifications are available below:
            </motion.p>

            <motion.div
              variants={fadeInRight}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-[#de362a] hover:bg-[#de362a] hover:text-white text-black px-8 py-4 rounded-full font-bold transition-all"
              >
                <FileCheck className="w-5 h-5" />
                ISO/IEC 27001 Certificate
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-[#de362a] hover:bg-[#de362a] hover:text-white text-black px-8 py-4 rounded-full font-bold transition-all"
              >
                <FileCheck className="w-5 h-5" />
                ISO/IEC 27701 Certificate
              </a>
            </motion.div>

            <motion.p
              variants={fadeInRight}
              className="text-sm text-gray-500 mt-8"
            >
              Certificates are issued by accredited certification bodies and are subject to regular audits and renewals.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
