import { AIDemoGrid } from '@/components/ai-demos/AIDemoGrid';
import AnimatedSection from '@/lib/AnimatedSection';
import { motion } from 'framer-motion';

export default function AIDemo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-900/10 to-transparent py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI Technology Showcase
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Experience the cutting-edge AI technologies I've worked with through these interactive demos.
              Enter your own prompts and witness the power of artificial intelligence firsthand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Cards Grid */}
      <AIDemoGrid />

      {/* Additional Info Section */}
      <AnimatedSection className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-muted/50 p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold mb-4">About These Demos</h2>
          <p className="mb-4">
            These interactive demonstrations showcase various applications of AI technology that I've implemented
            in professional projects. They utilize the OpenAI API to generate responses based on your prompts.
          </p>
          <p className="mb-4">
            Each demo represents a different capability of AI that can be integrated into applications:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><span className="font-medium">Code Completion:</span> Assists developers by suggesting code snippets and solutions.</li>
            <li><span className="font-medium">Content Generation:</span> Creates high-quality written content for various purposes.</li>
            <li><span className="font-medium">Image Analysis:</span> Describes and extracts information from images.</li>
            <li><span className="font-medium">Data Insights:</span> Interprets data patterns and provides meaningful analysis.</li>
          </ul>
          <p>
            These demos are powered by the same technologies I've implemented in enterprise applications
            to improve productivity, automate tasks, and enhance user experiences.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}