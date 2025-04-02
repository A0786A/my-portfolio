import { motion } from "framer-motion";
import { education, experience, skills } from "@/data/resume";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 page-transition">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-700 dark:text-primary-400">Resume</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A summary of my professional experience, education, and skills in AI development.
          </p>
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center mt-6 px-5 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md shadow transition-all duration-300 border border-gray-200 dark:border-gray-700"
            download
          >
            <i className="ri-download-line mr-2"></i>
            Download PDF Resume
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                <i className="ri-graduation-cap-fill text-2xl text-primary-700 dark:text-primary-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-primary-500 dark:border-primary-600 pl-4 pb-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{item.degree}</h4>
                    <span className="text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 py-1 px-2 rounded-full">{item.years}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Experience */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mr-4">
                <i className="ri-briefcase-4-fill text-2xl text-secondary-700 dark:text-secondary-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="border-l-2 border-secondary-500 dark:border-secondary-600 pl-4 pb-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{item.position}</h4>
                    <span className="text-sm font-medium bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300 py-1 px-2 rounded-full">{item.years}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{item.company}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <i className="ri-code-box-fill text-2xl text-green-700 dark:text-green-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
            </div>
            
            <div className="space-y-4">
              {skills.map((category, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
