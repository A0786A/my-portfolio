import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-16 page-transition">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="text-primary-700 dark:text-primary-400">Ali</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              AI Developer & ML Engineer
            </h2>
            
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
              I specialize in building intelligent applications that leverage cutting-edge AI technologies. 
              From machine learning models to natural language processing systems, I create solutions that 
              make a real-world impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={(e) => handleNavClick(e as any, "projects")} 
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              
              <Button 
                onClick={(e) => handleNavClick(e as any, "contact")} 
                variant="outline" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
            
            <div className="mt-10">
              <SocialLinks />
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1596492784531-6c349bb3a1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ali Alam - AI Developer" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-20">
                <div className="text-sm font-semibold text-primary-700 dark:text-primary-400 font-mono flex items-center">
                  <i className="ri-code-s-slash-line mr-1"></i> AI Engineer
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
