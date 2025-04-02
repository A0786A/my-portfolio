import { motion } from "framer-motion";

interface ThemeToggleProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="theme-toggle p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <i className="ri-sun-line text-xl"></i>
      ) : (
        <i className="ri-moon-line text-xl"></i>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
