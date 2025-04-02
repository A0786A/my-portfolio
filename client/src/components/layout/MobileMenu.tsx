interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onNavClick, onClose }: MobileMenuProps) => {
  return (
    <div className={`md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a 
          href="#home" 
          onClick={(e) => onNavClick(e, "home")}
          className="py-2 px-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => onNavClick(e, "about")}
          className="py-2 px-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          About
        </a>
        <a 
          href="#projects" 
          onClick={(e) => onNavClick(e, "projects")}
          className="py-2 px-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          Projects
        </a>
        <a 
          href="#hobbies" 
          onClick={(e) => onNavClick(e, "hobbies")}
          className="py-2 px-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          Hobbies
        </a>
        <a 
          href="#contact" 
          onClick={(e) => onNavClick(e, "contact")}
          className="py-2 px-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
