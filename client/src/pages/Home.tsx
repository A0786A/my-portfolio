import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import AboutSection from "@/components/about/AboutSection";
import HobbiesGrid from "@/components/hobbies/HobbiesGrid";
import Contact from "@/pages/Contact";
import { useActiveSection } from "@/hooks/useActiveSection";

const Home = () => {
  // Initialize active section highlighting on scroll
  useActiveSection();

  return (
    <>
      <Hero />
      <ProjectGrid />
      <AboutSection />
      <HobbiesGrid />
      <Contact />
    </>
  );
};

export default Home;
