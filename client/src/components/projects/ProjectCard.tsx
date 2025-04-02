import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      className="project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image}
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <Badge 
            className={`text-xs font-medium ${project.categoryColor} py-1 px-2 rounded-full`}
          >
            {project.category}
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-1 px-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary-700 dark:text-primary-400 font-medium flex items-center hover:underline"
          >
            View Project <i className="ri-arrow-right-line ml-1"></i>
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-xl"
          >
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
