import { motion } from "framer-motion";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-1 rounded-full bg-gray-200 dark:bg-gray-700 w-12 h-6 focus:outline-none"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      
      <span className="absolute left-1 text-yellow-400 dark:opacity-0 transition-opacity">
        <i className="ri-sun-line"></i>
      </span>
      
      <span className="absolute right-1 text-blue-300 opacity-0 dark:opacity-100 transition-opacity">
        <i className="ri-moon-line"></i>
      </span>
      
      <motion.span
        className="absolute bg-white dark:bg-gray-800 rounded-full w-4 h-4"
        initial={false}
        animate={{ x: theme === "dark" ? 14 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}