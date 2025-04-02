import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const SocialLinks = ({ className = "", iconClassName = "text-xl" }: SocialLinksProps) => {
  const socialLinks = [
    { icon: "ri-github-fill", href: "https://github.com", label: "GitHub" },
    { icon: "ri-linkedin-fill", href: "https://linkedin.com", label: "LinkedIn" },
    { icon: "ri-twitter-fill", href: "https://twitter.com", label: "Twitter" },
    { icon: "ri-medium-fill", href: "https://medium.com", label: "Medium" }
  ];

  return (
    <div className={`flex items-center space-x-5 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={link.label}
        >
          <i className={`${link.icon} ${iconClassName}`}></i>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
