export interface Education {
  degree: string;
  institution: string;
  years: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  years: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export const education: Education[] = [
  {
    degree: "M.S. Computer Science",
    institution: "Stanford University",
    years: "2020-2022",
    description: "Specialized in Machine Learning and Artificial Intelligence"
  },
  {
    degree: "B.S. Data Science",
    institution: "MIT",
    years: "2016-2020",
    description: "Minor in Software Engineering"
  }
];

export const experience: Experience[] = [
  {
    position: "AI Engineer",
    company: "TechAI Solutions",
    years: "2022-Present",
    description: "Leading development of NLP systems and computer vision applications for enterprise clients."
  },
  {
    position: "ML Research Intern",
    company: "Google AI",
    years: "2021-2022",
    description: "Contributed to research on transformer architectures and multi-modal learning."
  }
];

export const skills: SkillCategory[] = [
  {
    name: "Machine Learning / AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Computer Vision"]
  },
  {
    name: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Julia"]
  },
  {
    name: "Web Development",
    items: ["React", "Next.js", "Node.js", "FastAPI"]
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  }
];
