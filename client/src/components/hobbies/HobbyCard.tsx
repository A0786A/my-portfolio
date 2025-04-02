import { motion } from "framer-motion";
import { Hobby } from "@/data/hobbies";

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
}

const HobbyCard = ({ hobby, index }: HobbyCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={hobby.image} 
          alt={hobby.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <i className={`${hobby.icon} text-xl text-primary-600 dark:text-primary-400 mr-2`}></i>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{hobby.title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{hobby.description}</p>
      </div>
    </motion.div>
  );
};

export default HobbyCard;
