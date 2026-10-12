import { createOpenAI } from '@ai-sdk/openai';
import { DEFAULT_CHAT_MODEL, titleModel } from './models';

export const customOpenAI = createOpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

export function getLanguageModel(modelId: string) {
  return customOpenAI(modelId || DEFAULT_CHAT_MODEL);
}

// --- TAMBAHKAN INI SESUAI YANG DIMINTA actions.ts ---
export function getTitleModel() {
  return customOpenAI(titleModel);
}
