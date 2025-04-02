export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Image Generation",
    description: "A diffusion-based image generation system that creates photorealistic images from text descriptions.",
    image: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Deep Learning",
    categoryColor: "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300",
    technologies: ["PyTorch", "React", "FastAPI"],
    demoUrl: "https://example.com/ai-image-generator",
    githubUrl: "https://github.com/example/ai-image-generator"
  },
  {
    id: 2,
    title: "Sentiment Analysis Platform",
    description: "Real-time sentiment analysis for customer feedback across social media and review platforms.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "NLP",
    categoryColor: "bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300",
    technologies: ["Hugging Face", "Next.js", "MongoDB"],
    demoUrl: "https://example.com/sentiment-analysis",
    githubUrl: "https://github.com/example/sentiment-analysis"
  },
  {
    id: 3,
    title: "Healthcare AI Assistant",
    description: "An AI assistant that helps healthcare professionals analyze medical reports and identify patterns.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Healthcare",
    categoryColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
    technologies: ["TensorFlow", "Vue.js", "Django"],
    demoUrl: "https://example.com/healthcare-ai",
    githubUrl: "https://github.com/example/healthcare-ai"
  },
  {
    id: 4,
    title: "Recommender System",
    description: "A collaborative filtering system that provides personalized product recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Machine Learning",
    categoryColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300",
    technologies: ["Python", "Scikit-learn", "Flask", "Angular"],
    demoUrl: "https://example.com/recommender",
    githubUrl: "https://github.com/example/recommender"
  },
  {
    id: 5,
    title: "Voice Recognition System",
    description: "A speech-to-text application with natural language understanding capabilities.",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "NLP",
    categoryColor: "bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300",
    technologies: ["PyTorch", "WebRTC", "Node.js", "React"],
    demoUrl: "https://example.com/voice-recognition",
    githubUrl: "https://github.com/example/voice-recognition"
  },
  {
    id: 6,
    title: "Anomaly Detection System",
    description: "Real-time anomaly detection for IoT sensor data using deep learning.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "IoT",
    categoryColor: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300",
    technologies: ["Keras", "TensorFlow.js", "MQTT", "Grafana"],
    demoUrl: "https://example.com/anomaly-detection",
    githubUrl: "https://github.com/example/anomaly-detection"
  }
];
