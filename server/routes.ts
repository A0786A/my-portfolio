import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Add timestamp
      const messageData = {
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      
      const message = await storage.createMessage(messageData);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        console.error("Error saving message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Error saving your message. Please try again later." 
        });
      }
    }
  });

  // AI demo content generation endpoint
  app.post("/api/ai/generate-content", async (req, res) => {
    try {
      const { prompt, demoType } = req.body;
      
      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: "Invalid prompt" });
      }
      
      // Different system prompts based on demo type
      let systemPrompt = "You are a helpful AI assistant.";
      
      switch(demoType) {
        case 'code-completion':
          systemPrompt = "You are a code completion assistant. Provide brief, clean code solutions.";
          break;
        case 'content-writer':
          systemPrompt = "You are a creative content writer that generates engaging text in a professional tone.";
          break;
        case 'image-description':
          systemPrompt = "You are an image analysis assistant. Describe what might be in an image based on the prompt.";
          break;
        case 'data-analyzer':
          systemPrompt = "You are a data analysis assistant. Provide insights about the data mentioned.";
          break;
      }
      
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        max_tokens: 150
      });
      
      const content = completion.choices[0]?.message?.content || "Sorry, I couldn't generate content based on that prompt.";
      
      res.json({ content });
    } catch (error) {
      console.error("OpenAI API error:", error);
      res.status(500).json({ error: "Failed to generate content" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
