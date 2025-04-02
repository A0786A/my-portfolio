import { AIDemoCard } from '@/components/ai-demos/AIDemoCard';
import { aiDemos } from '@/data/ai-demos';
import AnimatedSection from '@/lib/AnimatedSection';

export function AIDemoGrid() {
  return (
    <AnimatedSection className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Interactive AI Demos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the power of AI with these interactive demos. Enter your own prompts and see the AI in action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {aiDemos.map((demo) => (
          <AIDemoCard key={demo.id} demo={demo} />
        ))}
      </div>
    </AnimatedSection>
  );
}