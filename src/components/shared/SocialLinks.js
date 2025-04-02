export default function SocialLinks({ className = "", iconClassName = "text-xl" }) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "ri-github-fill",
      url: "https://github.com/A0786A",
    },
    {
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      url: "https://linkedin.com/in/ali-alam",
    },
    {
      name: "Twitter",
      icon: "ri-twitter-fill",
      url: "https://twitter.com/ali_alam_dev",
    },
    {
      name: "Medium",
      icon: "ri-medium-fill",
      url: "https://medium.com/@ali.alam.dev",
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label={link.name}
        >
          <i className={`${link.icon} ${iconClassName}`}></i>
        </a>
      ))}
    </div>
  );
}