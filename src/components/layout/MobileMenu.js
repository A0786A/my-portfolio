import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ isOpen, onNavClick, onClose }) {
  const router = useRouter();
  
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <motion.nav
            className="container mx-auto px-4 py-6"
            variants={staggerChildrenVariants}
          >
            <motion.div variants={childVariants} className="py-3">
              <Link href="/">
                <a 
                  className={`block text-xl ${
                    router.pathname === "/" 
                      ? "font-medium text-primary-600 dark:text-primary-400" 
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={onClose}
                >
                  Home
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={childVariants} className="py-3">
              <Link href="/about">
                <a 
                  className={`block text-xl ${
                    router.pathname === "/about" 
                      ? "font-medium text-primary-600 dark:text-primary-400" 
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={onClose}
                >
                  About
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={childVariants} className="py-3">
              <Link href="/#projects">
                <a 
                  className="block text-xl text-gray-700 dark:text-gray-300"
                  onClick={(e) => onNavClick(e, "projects")}
                >
                  Projects
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={childVariants} className="py-3">
              <Link href="/#hobbies">
                <a 
                  className="block text-xl text-gray-700 dark:text-gray-300"
                  onClick={(e) => onNavClick(e, "hobbies")}
                >
                  Hobbies
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={childVariants} className="py-3">
              <Link href="/contact">
                <a 
                  className={`block text-xl ${
                    router.pathname === "/contact" 
                      ? "font-medium text-primary-600 dark:text-primary-400" 
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={onClose}
                >
                  Contact
                </a>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={childVariants}
              className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
            >
              <Link href="/contact">
                <a 
                  className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  onClick={onClose}
                >
                  Get in Touch
                </a>
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}