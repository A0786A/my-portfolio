import { motion } from "framer-motion";
import AnimatedSection from "@/lib/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 page-transition">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary-700 dark:text-primary-400">Me</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and expertise
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.1}>
              <div className="relative h-full">
                <div className="w-full h-full bg-gradient-to-tr from-primary-200 to-primary-400 dark:from-primary-900 dark:to-primary-700 rounded-xl absolute -rotate-3 scale-95 opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1596492784531-6c349bb3a1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ali Alam - AI Developer" 
                  className="w-full h-full object-cover rounded-xl relative z-10 shadow-xl"
                />
                <div className="absolute -bottom-4 left-10 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg z-20">
                  <p className="text-sm font-semibold text-primary-700 dark:text-primary-400">
                    6+ Years of Experience
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                AI Developer & Machine Learning Engineer
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Hello! I'm Ali Alam, a passionate AI Developer and Machine Learning Engineer with a strong
                background in building intelligent applications. I specialize in leveraging cutting-edge AI 
                technologies to solve complex real-world problems.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With expertise in deep learning, natural language processing, and computer vision, I've 
                developed innovative solutions across various industries including healthcare, finance, 
                and e-commerce. I'm driven by the challenge of creating AI systems that are not only 
                powerful but also ethical and accessible.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                When I'm not coding or exploring new ML architectures, you can find me sharing my 
                knowledge through technical articles and mentoring aspiring data scientists.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">Deep Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">Computer Vision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">Natural Language Processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">Reinforcement Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">Model Deployment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">Data Visualization</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">PyTorch</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">TensorFlow</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">Docker</span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">AWS</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;