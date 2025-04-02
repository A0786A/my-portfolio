import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Home({ theme, toggleTheme }) {
  const [mounted, setMounted] = useState(false);

  // Only show UI elements when component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-4">
                AI Developer & ML Engineer
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Ali</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                I build intelligent solutions that deliver real-world impact. Specializing in artificial intelligence, machine learning, and computer vision to solve complex problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-sm transition-colors flex items-center justify-center gap-2">
                    Hire Me
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
                
                <Link href="/about">
                  <a className="px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md shadow-sm transition-colors flex items-center justify-center gap-2">
                    About Me
                    <i className="ri-user-line"></i>
                  </a>
                </Link>
              </div>
              
              <div className="mt-12">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-700 overflow-hidden"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">100+</span> projects completed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10 rounded-2xl"></div>
                <Image
                  src="/Ali_Alam.webp" 
                  layout="fill"
                  objectFit="cover"
                  alt="Ali Alam - AI Developer"
                  className="rounded-2xl"
                  priority
                />
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <i className="ri-code-s-slash-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                    <p className="font-medium text-gray-900 dark:text-white">5+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                    <i className="ri-customer-service-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                    <p className="font-medium text-gray-900 dark:text-white">100%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Section Preview */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of my recent work in artificial intelligence, machine learning, and software development.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                  AI/ML
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Visual Recognition System
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A computer vision system for real-time object detection and classification using state-of-the-art deep learning models.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    Python
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    TensorFlow
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    OpenCV
                  </span>
                </div>
                <div className="flex justify-between">
                  <a 
                    href="#" 
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1"
                  >
                    Live Demo
                    <i className="ri-external-link-line"></i>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                  >
                    GitHub
                    <i className="ri-github-line"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                  NLP
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Sentiment Analysis API
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A natural language processing API that analyzes sentiment in text using transformer-based models.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    Python
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    HuggingFace
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    FastAPI
                  </span>
                </div>
                <div className="flex justify-between">
                  <a 
                    href="#" 
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1"
                  >
                    Live Demo
                    <i className="ri-external-link-line"></i>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                  >
                    GitHub
                    <i className="ri-github-line"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                <div className="absolute top-3 left-3 bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                  Web App
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  AI-Powered Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A data visualization dashboard with AI-driven insights and predictive analytics features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    React
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    TypeScript
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md">
                    D3.js
                  </span>
                </div>
                <div className="flex justify-between">
                  <a 
                    href="#" 
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1"
                  >
                    Live Demo
                    <i className="ri-external-link-line"></i>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                  >
                    GitHub
                    <i className="ri-github-line"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/projects">
              <a className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
                View all projects
                <i className="ri-arrow-right-line"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Hobbies Section Preview */}
      <section id="hobbies" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Beyond Coding
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              When I'm not coding, here are some of the activities that keep me inspired and creative.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hobby Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <i className="ri-camera-line text-6xl text-gray-500 dark:text-gray-400"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Photography
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Capturing moments and perspectives through landscape and street photography.
                </p>
              </div>
            </motion.div>
            
            {/* Hobby Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <i className="ri-book-open-line text-6xl text-gray-500 dark:text-gray-400"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Reading
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring new ideas through science fiction, philosophy, and technical books.
                </p>
              </div>
            </motion.div>
            
            {/* Hobby Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <i className="ri-mountain-line text-6xl text-gray-500 dark:text-gray-400"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Hiking
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring nature trails and summits to disconnect and gain fresh perspectives.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/hobbies">
              <a className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
                Learn more about my interests
                <i className="ri-arrow-right-line"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing product design, development work, or partnership opportunities.
            </p>
            
            <Link href="/contact">
              <a className="inline-block px-8 py-4 bg-white text-primary-600 font-medium rounded-md shadow-md hover:bg-gray-100 transition-colors">
                Get in Touch
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}