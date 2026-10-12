import { createOpenAI } from '@ai-sdk/openai';

// Konfigurasi koneksi ke 9router melalui Environment Variables Vercel
export const customOpenAI = createOpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

// Fungsi untuk menerima ID model kustom dari 9router tanpa error TypeScript
export function getLanguageModel(modelId: string) {
  return customOpenAI(modelId);
}
