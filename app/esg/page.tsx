'use client';

import { motion } from 'framer-motion';
import { Leaf, Users, Shield, TrendingUp, FileText, Target } from 'lucide-react';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function ESGPage() {
  const environmentalPractices = [
    {
      icon: <Leaf className="w-10 h-10 text-[#de362a]" />,
      title: 'Digital-First Operations',
      description: 'Paperless workflows and cloud-based infrastructure reducing physical resource consumption.',
    },
    {
      icon: <Target className="w-10 h-10 text-[#de362a]" />,
      title: 'Infrastructure Efficiency',
      description: 'Optimized cloud infrastructure and energy-efficient data center partnerships.',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#de362a]" />,
      title: 'Carbon Footprint Optimization',
      description: 'Remote-first model reducing commute emissions and office energy consumption.',
    },
    {
      icon: <Leaf className="w-10 h-10 text-[#de362a]" />,
      title: 'Waste Reduction',
      description: 'Minimal physical waste through digital operations and responsible resource management.',
    },
    {
      icon: <Shield className="w-10 h-10 text-[#de362a]" />,
      title: 'Sustainable Engineering',
      description: 'Building efficient, scalable software that optimizes resource utilization.',
    },
  ];

  const socialInitiatives = [
    {
      icon: <Users className="w-10 h-10 text-[#de362a]" />,
      title: 'Community Engagement',
      description: 'Active participation in local tech communities and knowledge sharing.',
    },
    {
      icon: <FileText className="w-10 h-10 text-[#de362a]" />,
      title: 'University Partnerships',
      description: 'Collaborations with universities for research, internships, and curriculum development.',
    },
    {
      icon: <Target className="w-10 h-10 text-[#de362a]" />,
      title: 'Youth Empowerment',
      description: 'Training programs and mentorship for emerging tech talent.',
    },
    {
      icon: <Users className="w-10 h-10 text-[#de362a]" />,
      title: 'Volunteer Initiatives',
      description: 'Employee volunteer programs supporting local communities.',
    },
    {
      icon: <Shield className="w-10 h-10 text-[#de362a]" />,
      title: 'Diversity & Inclusion',
      description: 'Commitment to diverse hiring and inclusive workplace culture.',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#de362a]" />,
      title: 'Workforce Development',
      description: 'Continuous learning and professional development opportunities.',
    },
  ];

  const governancePrinciples = [
    {
      title: 'Ethical Governance Framework',
      description: 'Structured governance ensuring ethical decision-making and accountability.',
    },
    {
      title: 'Leadership Accountability',
      description: 'Clear leadership responsibilities and transparent reporting structures.',
    },
    {
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of operational and strategic risks.',
    },
    {
      title: 'Compliance Alignment',
      description: 'Adherence to ISO 27001, ISO 27701, and international regulatory standards.',
    },
    {
      title: 'Data Ethics',
      description: 'Responsible data handling and privacy protection practices.',
    },
    {
      title: 'Transparency & Reporting',
      description: 'Regular reporting on ESG performance and business practices.',
    },
  ];

  const impactMetrics = [
    {
      category: 'Community',
      metrics: [
        { label: 'University Partnerships', value: '15+' },
        { label: 'Students Trained', value: '500+' },
        { label: 'Community Events', value: '25+' },
      ],
    },
    {
      category: 'Workforce',
      metrics: [
        { label: 'Employee Growth', value: '40% YoY' },
        { label: 'Training Hours', value: '10,000+' },
        { label: 'Diversity Rate', value: '35%' },
      ],
    },
    {
      category: 'Sustainability',
      metrics: [
        { label: 'Remote Workforce', value: '80%' },
        { label: 'Digital Operations', value: '100%' },
        { label: 'Cloud Infrastructure', value: '100%' },
      ],
    },
    {
      category: 'Governance',
      metrics: [
        { label: 'ISO Certifications', value: '2' },
        { label: 'Compliance Rate', value: '100%' },
        { label: 'Audit Frequency', value: 'Annual' },
      ],
    },
  ];

  const policies = [
    {
      title: 'Code of Conduct',
      description: 'Ethical standards and behavioral expectations for all employees.',
      href: '/esg/code-of-conduct',
    },
    {
      title: 'Anti-Corruption Policy',
      description: 'Zero-tolerance approach to bribery, corruption, and unethical practices.',
      href: '/esg/anti-corruption',
    },
    {
      title: 'Data Ethics Policy',
      description: 'Principles for responsible data collection, processing, and protection.',
      href: '/esg/data-ethics',
    },
    {
      title: 'ESG Report',
      description: 'Annual sustainability and impact reporting (Coming Soon).',
      href: '#',
    },
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
            <motion.h1 variants={fadeInRight} className="text-5xl md:text-7xl font-bold mb-6">
              ESG & Corporate Responsibility
            </motion.h1>
            <motion.p variants={fadeInRight} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Building sustainable technology solutions while creating positive impact for our communities, environment, and stakeholders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our ESG Commitment
            </motion.h2>
            <motion.div variants={fadeInRight} className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                At ASAL Technologies, we recognize that sustainable business practices are essential for long-term success. Our ESG framework guides our operations, decision-making, and strategic planning.
              </p>
              <p>
                We align our practices with international standards including the UN Sustainable Development Goals, ISO certifications, and industry best practices. Our commitment extends beyond compliance to creating meaningful, measurable impact.
              </p>
              <p>
                Our long-term sustainable strategy focuses on responsible growth, community investment, environmental stewardship, and ethical governance that benefits all stakeholders.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Environmental Responsibility
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {environmentalPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInRight}
                  className="bg-white p-8 rounded-2xl border border-gray-200"
                >
                  <div className="mb-4">{practice.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Social Responsibility
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {socialInitiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInRight}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
                >
                  <div className="mb-4">{initiative.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Governance & Ethics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Governance & Ethics
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {governancePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInRight}
                  className="bg-white p-8 rounded-2xl border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quantified Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Quantified Impact
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {impactMetrics.map((category, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInRight}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold mb-6 text-[#de362a]">{category.category}</h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-3xl font-bold mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Policies & Documentation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Policies & Documentation
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {policies.map((policy, index) => (
                <motion.a
                  key={index}
                  custom={index}
                  variants={fadeInRight}
                  href={policy.href}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#de362a] transition-colors"
                >
                  <h3 className="text-xl font-bold mb-4">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
