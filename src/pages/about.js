import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About({ theme, toggleTheme }) {
  const [mounted, setMounted] = useState(false);

  // Only show UI elements when component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                About Me
              </span>
            </h1>

            <div className="mb-12 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                AI Developer & Machine Learning Engineer with a passion for building intelligent applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Background</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I've been working in the field of artificial intelligence and machine learning for over 5 years, with a focus on developing solutions that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  My expertise spans across various domains including computer vision, natural language processing, and reinforcement learning.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Approach</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I believe in building AI systems that are not only technically sound but also ethical, explainable, and user-friendly.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  My work is guided by a strong commitment to using technology to create positive impacts on society and improve human lives.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Education & Certifications</h2>
              
              <div className="mb-6 border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">MSc in Artificial Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Stanford University</p>
                <p className="text-gray-500 dark:text-gray-500">2017 - 2019</p>
              </div>
              
              <div className="mb-6 border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">BSc in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Massachusetts Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-500">2013 - 2017</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Deep Learning Specialization</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Coursera & deeplearning.ai</p>
                <p className="text-gray-500 dark:text-gray-500">2020</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Skills & Technologies</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Languages</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Python</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Julia</li>
                    <li>C++</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Frameworks</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Scikit-learn</li>
                    <li>Keras</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Tools & Platforms</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Docker</li>
                    <li>AWS/Google Cloud</li>
                    <li>MLflow</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">ML Areas</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Computer Vision</li>
                    <li>Natural Language Processing</li>
                    <li>Reinforcement Learning</li>
                    <li>Time Series Analysis</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Big Data</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Spark</li>
                    <li>Hadoop</li>
                    <li>SQL/NoSQL Databases</li>
                    <li>Kafka</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Web Development</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}