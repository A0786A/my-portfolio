import { AIDemo } from "@/lib/types";

export const aiDemos: AIDemo[] = [
  {
    id: "code-completion",
    title: "Code Completion",
    description: "Experience intelligent code suggestions and completions powered by AI.",
    icon: "CpuIcon",
    type: "code-completion",
    defaultPrompt: "Write a function to reverse a string in JavaScript",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "content-writer",
    title: "Content Generator",
    description: "Create professional-quality written content with AI assistance.",
    icon: "PenToolIcon",
    type: "content-writer",
    defaultPrompt: "Write a short product description for a premium wireless headphone",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "image-description",
    title: "Image Analyzer",
    description: "Generate detailed descriptions of images for accessibility or insights.",
    icon: "ImageIcon",
    type: "image-description",
    defaultPrompt: "Describe a landscape photo of mountains and a lake at sunset",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "data-analyzer",
    title: "Data Insight Generator",
    description: "Extract meaningful insights and patterns from your data.",
    icon: "BarChartIcon",
    type: "data-analyzer",
    defaultPrompt: "Analyze sales data showing a 15% increase in Q2 but 10% decrease in Q3",
    color: "from-green-500 to-emerald-600"
  }
];