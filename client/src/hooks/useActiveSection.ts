import { useEffect } from 'react';

/**
 * Hook to handle active section highlighting on scroll
 */
export const useActiveSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavOnScroll = () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
          });
          
          const activeNavItem = document.querySelector(`a[href="#${sectionId}"]`);
          if (activeNavItem) {
            activeNavItem.classList.add('active');
          }
        }
      });
    };
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Initialize active section on page load
    highlightNavOnScroll();
    
    return () => {
      window.removeEventListener('scroll', highlightNavOnScroll);
    };
  }, []);
};
