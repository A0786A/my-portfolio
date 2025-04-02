import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  // Display only first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-800 dark:bg-gray-900 page-transition">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            AI <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work in artificial intelligence and machine learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            asChild
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="/projects">
              View All Projects
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
