'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import FormButton from '@/components/ui/FormButton';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    projectScope: '',
    timeline: '',
    budget: '',
    message: '',
    nda: false,
  });
  const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'error'>('default');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', industry: '', projectScope: '', timeline: '', budget: '', message: '', nda: false });
      setTimeout(() => setStatus('default'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get a Quote
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Ready to scale your engineering capabilities? Let's discuss your project requirements and how ASAL can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <h2 className="text-3xl font-bold mb-6">Enterprise Consultation Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                    >
                      <option value="">Select Industry</option>
                      <option value="high-tech">High Tech & Software</option>
                      <option value="healthcare">Healthcare & Life Sciences</option>
                      <option value="telecom">Telecommunications</option>
                      <option value="logistics">Transportation & Logistics</option>
                      <option value="education">Education & E-Learning</option>
                      <option value="hospitality">Hospitality & Services</option>
                      <option value="agriculture">Agriculture & Environmental</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="projectScope" className="block text-sm font-medium mb-2">
                    Project Scope *
                  </label>
                  <select
                    id="projectScope"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                  >
                    <option value="">Select Project Type</option>
                    <option value="custom-development">Custom Software Development</option>
                    <option value="product-engineering">Product Engineering</option>
                    <option value="ai-data-services">AI & Data Engineering</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="rd-services">R&D Services</option>
                    <option value="qa-testing">QA & Testing</option>
                    <option value="team-extension">Team Extension & Managed Services</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Expected Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                    >
                      <option value="">Select Timeline</option>
                      <option value="immediate">Immediate (1-2 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (12+ months)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m+">$1M+</option>
                      <option value="tbd">To Be Discussed</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Please describe your project requirements, technical challenges, and what you're looking to achieve..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#de362a] transition-colors resize-none"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="nda"
                    name="nda"
                    checked={formData.nda}
                    onChange={(e) => setFormData(prev => ({ ...prev, nda: e.target.checked }))}
                    className="mt-1 w-4 h-4 text-[#de362a] border-gray-300 rounded focus:ring-[#de362a]"
                  />
                  <label htmlFor="nda" className="text-sm text-gray-600">
                    I would like to request an NDA before discussing project details
                  </label>
                </div>
                <FormButton
                  type="submit"
                  text="Send Message"
                  state={status}
                />
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Ready to discuss your project? Our team is here to help you find the right engineering solution for your business needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#de362a]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">contact@asal-technologies.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#de362a]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Global Locations</h3>
                    <p className="text-gray-600">
                      Amman, Jordan<br />
                      MENA Region<br />
                      Europe
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold mb-3">Why Choose ASAL?</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>✓ 26+ years of engineering excellence</p>
                  <p>✓ 450+ skilled engineers</p>
                  <p>✓ ISO 27001 & 27701 certified</p>
                  <p>✓ Nearshore advantage</p>
                  <p>✓ Enterprise-grade delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
