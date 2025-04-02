import Link from "next/link";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-900 dark:text-white inline-block mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                  Ali Alam
                </span>
              </a>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              AI Developer & Machine Learning Engineer specializing in building intelligent solutions that solve real-world problems.
            </p>
            
            <SocialLinks iconClassName="text-xl" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#projects">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#hobbies">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Hobbies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-primary-600 dark:text-primary-400 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-400">
                  San Francisco, CA
                </span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-primary-600 dark:text-primary-400 mt-1 mr-3"></i>
                <a 
                  href="mailto:contact@alialam.dev" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  contact@alialam.dev
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-primary-600 dark:text-primary-400 mt-1 mr-3"></i>
                <a 
                  href="tel:+11234567890" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} Ali Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}