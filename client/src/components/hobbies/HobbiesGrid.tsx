import { motion } from "framer-motion";
import HobbyCard from "./HobbyCard";
import { hobbies } from "@/data/hobbies";

const HobbiesGrid = () => {
  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-900 page-transition">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-700 dark:text-primary-400">Hobbies</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            When I'm not coding or exploring AI, here's what keeps me busy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesGrid;
