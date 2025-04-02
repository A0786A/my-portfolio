import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeToggle from "@/components/shared/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle scroll to section
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // If we're on the homepage, scroll to the section
    if (router.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 80, // Accounting for header height
          behavior: "smooth"
        });
      }
      setIsMobileMenuOpen(false);
    } else {
      // If we're on another page, navigate to homepage first then scroll
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Ali Alam
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a 
                className={`text-lg ${
                  router.pathname === "/" 
                    ? "font-medium text-primary-600 dark:text-primary-400" 
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                } transition-colors`}
              >
                Home
              </a>
            </Link>
            
            <Link href="/about">
              <a 
                className={`text-lg ${
                  router.pathname === "/about" 
                    ? "font-medium text-primary-600 dark:text-primary-400" 
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                } transition-colors`}
              >
                About
              </a>
            </Link>
            
            <Link href="/#projects">
              <a 
                onClick={(e) => handleNavClick(e, "projects")}
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Projects
              </a>
            </Link>
            
            <Link href="/#hobbies">
              <a 
                onClick={(e) => handleNavClick(e, "hobbies")}
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Hobbies
              </a>
            </Link>
            
            <Link href="/contact">
              <a 
                className={`text-lg ${
                  router.pathname === "/contact" 
                    ? "font-medium text-primary-600 dark:text-primary-400" 
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                } transition-colors`}
              >
                Contact
              </a>
            </Link>
            
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </nav>

          {/* Mobile Navigation Toggle + Theme Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <i className="ri-close-line text-2xl"></i>
              ) : (
                <i className="ri-menu-line text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onNavClick={handleNavClick} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}