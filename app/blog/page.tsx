'use client';

import { motion } from 'framer-motion';
import BlogCard from '@/components/ui/BlogCard';
import { fadeInRight, staggerContainer } from '@/lib/animations';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Building Scalable AI Systems: Lessons from Enterprise Deployments',
      excerpt: 'Key architectural considerations and best practices for deploying AI solutions at enterprise scale.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      date: 'Jan 15, 2026',
      readTime: '8 min read',
      category: 'AI & Data',
      href: '/blog/scalable-ai-systems',
    },
    {
      title: 'Cloud-Native Architecture Patterns for Modern Applications',
      excerpt: 'Designing resilient, scalable applications using cloud-native principles and microservices.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      date: 'Jan 12, 2026',
      readTime: '7 min read',
      category: 'Engineering',
      href: '/blog/cloud-native-architecture',
    },
    {
      title: 'Digital Transformation: From Legacy to Cloud-Native',
      excerpt: 'Strategic approaches to modernizing legacy systems while maintaining business continuity.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      date: 'Jan 10, 2026',
      readTime: '6 min read',
      category: 'Digital Transformation',
      href: '/blog/legacy-to-cloud-native',
    },
    {
      title: 'ISO 27001 & 27701: Security and Privacy by Design',
      excerpt: 'How security and privacy certifications strengthen enterprise software development practices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      date: 'Jan 8, 2026',
      readTime: '5 min read',
      category: 'Security',
      href: '/blog/iso-security-privacy',
    },
    {
      title: 'Nearshore Engineering: The Strategic Advantage',
      excerpt: 'Why nearshore development partnerships deliver better outcomes for enterprise software projects.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      date: 'Jan 5, 2026',
      readTime: '6 min read',
      category: 'Nearshore',
      href: '/blog/nearshore-advantage',
    },
    {
      title: 'ASAL Technologies Achieves ISO 27701 Certification',
      excerpt: 'Strengthening our commitment to privacy and data protection with international certification.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      date: 'Jan 3, 2026',
      readTime: '4 min read',
      category: 'Company News',
      href: '/blog/iso-27701-certification',
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
            <motion.h1
              variants={fadeInRight}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Insights & Resources
            </motion.h1>
            <motion.p
              variants={fadeInRight}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Technical insights, industry perspectives, and engineering best practices from ASAL Technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInRight}
              >
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                  href={post.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
