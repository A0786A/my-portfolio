// Types for AI demos
export type AIDemoType = 'code-completion' | 'content-writer' | 'image-description' | 'data-analyzer';

export interface AIDemo {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: AIDemoType;
  defaultPrompt: string;
  color: string;
}

// Add other types as needed