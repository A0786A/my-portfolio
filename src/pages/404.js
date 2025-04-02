import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound({ theme, toggleTheme }) {
  const [mounted, setMounted] = useState(false);

  // Only show UI elements when component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Page Not Found
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <a className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-sm transition-colors">
                  Go to Homepage
                </a>
              </Link>
              
              <Link href="/contact">
                <a className="px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md shadow-sm transition-colors">
                  Contact Support
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}