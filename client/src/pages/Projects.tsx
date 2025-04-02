import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className="py-20 min-h-screen bg-gray-100 dark:bg-gray-800 page-transition">
      <div className="container mx-auto px-4 md:px-8 mt-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All <span className="text-primary-700 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive collection of my artificial intelligence and machine learning projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
