import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Contact({ theme, toggleTheme }) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Only show UI elements when component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // This is a mock submission - in a real application, you would send this to your backend
    setTimeout(() => {
      setFormStatus({ 
        submitting: false, 
        submitted: true, 
        error: null 
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Get In Touch
              </span>
            </h1>

            <div className="mb-12 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Have a question or want to work together? I'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Info</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                        <i className="ri-map-pin-line text-xl text-primary-600 dark:text-primary-400"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Location</h3>
                        <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                        <i className="ri-mail-line text-xl text-primary-600 dark:text-primary-400"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Email</h3>
                        <a href="mailto:contact@alialam.dev" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          contact@alialam.dev
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                        <i className="ri-phone-line text-xl text-primary-600 dark:text-primary-400"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white mb-1">Phone</h3>
                        <a href="tel:+11234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          +1 (123) 456-7890
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-gray-800 dark:text-white mb-4">Connect with me</h3>
                    <SocialLinks iconClassName="text-2xl" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h2>
                  
                  {formStatus.submitted ? (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <i className="ri-check-line text-green-500 text-xl"></i>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800 dark:text-green-400">
                            Message sent successfully!
                          </h3>
                          <div className="mt-2 text-sm text-green-700 dark:text-green-500">
                            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Project discussion"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md flex justify-center items-center transition-colors ${formStatus.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {formStatus.submitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}