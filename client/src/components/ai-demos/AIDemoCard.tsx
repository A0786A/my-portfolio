import { useState } from 'react';
import { AIDemo } from '@/lib/types';
import { useAIGeneration } from '@/hooks/use-ai-generation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { CpuIcon, PenToolIcon, ImageIcon, BarChartIcon, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIDemoCardProps {
  demo: AIDemo;
  className?: string;
}

export function AIDemoCard({ demo, className }: AIDemoCardProps) {
  const [prompt, setPrompt] = useState(demo.defaultPrompt);
  const { generateContent, content, isGenerating } = useAIGeneration();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateContent({ prompt, demoType: demo.type });
    setIsExpanded(true);
  };

  const renderIcon = () => {
    const iconProps = { className: "h-5 w-5" };
    switch(demo.icon) {
      case 'CpuIcon': return <CpuIcon {...iconProps} />;
      case 'PenToolIcon': return <PenToolIcon {...iconProps} />;
      case 'ImageIcon': return <ImageIcon {...iconProps} />;
      case 'BarChartIcon': return <BarChartIcon {...iconProps} />;
      default: return <CpuIcon {...iconProps} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-t-4 h-full flex flex-col" 
        style={{ borderTopColor: `rgb(139, 92, 246)` }}>
        <div className="p-6 flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-full bg-gradient-to-r ${demo.color} text-white`}>
              {renderIcon()}
            </div>
            <h3 className="text-xl font-bold">{demo.title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-4">{demo.description}</p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <Textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="resize-none min-h-[80px]"
            />
            
            <Button type="submit" disabled={isGenerating} className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : 'Generate Content'}
            </Button>
          </form>

          {content && isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-3 bg-muted/50 rounded-md"
            >
              <h4 className="font-medium mb-1">Generated Content:</h4>
              <p className="text-sm whitespace-pre-line">{content}</p>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}