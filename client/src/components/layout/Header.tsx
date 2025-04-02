import { useState } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "@/components/shared/ThemeToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import { scrollToSection } from "@/lib/utils";

interface HeaderProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = location === "/" || location === "";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to section
      scrollToSection(sectionId);
    } else {
      // If on another page, navigate to homepage and then scroll to section
      window.location.href = `/#${sectionId}`;
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight text-primary-700 dark:text-primary-400 hover:opacity-80 transition-opacity">
              <span className="text-primary-700 dark:text-primary-400">Ali Alam</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, "home")}
              className={`nav-item font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 ${isHomePage && location === "/" ? "active" : ""}`}
            >
              Home
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, "projects")}
              className="nav-item font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="nav-item font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400"
            >
              About
            </a>
            <a 
              href="#hobbies" 
              onClick={(e) => handleNavClick(e, "hobbies")}
              className="nav-item font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400"
            >
              Hobbies
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")}
              className="nav-item font-medium text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400"
            >
              Contact
            </a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onNavClick={handleNavClick} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;
