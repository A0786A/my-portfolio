import { useState } from 'react';
import { AIDemoType } from '@/lib/types';
import { apiRequest } from '@/lib/queryClient';

interface UseAIGenerationOptions {
  onSuccess?: (content: string) => void;
  onError?: (error: any) => void;
}

interface GenerateContentParams {
  prompt: string;
  demoType: AIDemoType;
}

export function useAIGeneration(options?: UseAIGenerationOptions) {
  const [content, setContent] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const generateContent = async ({ prompt, demoType }: GenerateContentParams) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await apiRequest(
        'POST',
        '/api/ai/generate-content',
        { prompt, demoType }
      );
      
      const data = await response.json();
      
      setContent(data.content);
      options?.onSuccess?.(data.content);
      return data.content;
    } catch (err) {
      const error = err as Error;
      setError(error);
      options?.onError?.(error);
      console.error('Error generating AI content:', error);
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    content,
    isGenerating,
    error,
    generateContent,
  };
}