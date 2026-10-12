import { createOpenAI } from '@ai-sdk/openai';

// Inisialisasi provider OpenAI yang mengarah ke 9router via ngrok
export const customProvider = createOpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper function untuk memanggil model
export function getModel(modelId: string) {
  return customProvider(modelId);
}
