import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <div>
      <motion.div 
        className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="ri-mail-fill text-xl text-primary-700 dark:text-primary-400"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
              <a href="mailto:alex@example.com" className="text-primary-700 dark:text-primary-400 hover:underline">alex@example.com</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="ri-map-pin-fill text-xl text-primary-700 dark:text-primary-400"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
              <p className="text-gray-700 dark:text-gray-300">San Francisco, California</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="ri-time-fill text-xl text-primary-700 dark:text-primary-400"></i>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Availability</h4>
              <p className="text-gray-700 dark:text-gray-300">Monday-Friday, 9AM-6PM PST</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
        <div className="grid grid-cols-2 gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition"
          >
            <i className="ri-linkedin-fill text-xl mr-2"></i>
            LinkedIn
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#333] text-white rounded-lg hover:opacity-90 transition"
          >
            <i className="ri-github-fill text-xl mr-2"></i>
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition"
          >
            <i className="ri-twitter-fill text-xl mr-2"></i>
            Twitter
          </a>
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#000000] text-white rounded-lg hover:opacity-90 transition"
          >
            <i className="ri-medium-fill text-xl mr-2"></i>
            Medium
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
