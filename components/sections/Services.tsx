'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Build scalable, secure, and high-performance software solutions tailored to your business needs.',
      image: '/images/service-strategy.png',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: 'Product and Application Engineering',
      description: 'End-to-end product development from concept to deployment and continuous optimization.',
      image: '/images/service-content.png',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
    },
    {
      title: 'Research and Development Services',
      description: 'Advanced R&D capabilities supporting complex, high-impact technology initiatives.',
      image: '/images/service-chatbot.png',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
    },
    {
      title: 'Cloud, DevOps, and Data Engineering',
      description: 'Modern cloud infrastructure, DevOps practices, and data engineering solutions.',
      image: '/images/service-workflow.png',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Quality Assurance and Testing',
      description: 'Comprehensive QA services ensuring reliability, security, and performance.',
      image: '/images/service-integration.png',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-4">/OUR SERVICES</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-black leading-[1.1] max-w-2xl">
              End-to-End Software Development and R&D Services
            </h2>
            <p className="text-[17px] text-[#666666] max-w-md">
              ASAL delivers comprehensive software development services that support organizations at every stage of their digital journey.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* Top Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Section - 2/3 */}
                <div className="relative h-48 md:h-56 bg-[#f0f0f0] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                
                {/* Content Section - 1/3 */}
                <div className="p-5 flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-black mt-1">
                    {service.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2 group-hover:text-[#ffd700] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Section - 2/3 */}
                <div className="relative h-40 md:h-48 bg-[#f0f0f0] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                
                {/* Content Section - 1/3 */}
                <div className="p-4 flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-black mt-0.5">
                    {service.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2 group-hover:text-[#ffd700] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
