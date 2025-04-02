import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  
  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Check for saved theme or use system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Update localStorage and document body when theme changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </AnimatePresence>
  );
}