export interface ChatModel {
  id: string;
  name: string;
  description?: string;
}

export const chatModels: ChatModel[] = [
  {
    id: 'kr/claude-sonnet-4.5',
    name: 'Claude Sonnet 4.5',
    description: 'Claude Sonnet 4.5 via Kiro 9router',
  },
  {
    id: 'kr/claude-haiku-4.5',
    name: 'Claude Haiku 4.5',
    description: 'Claude Haiku 4.5 via Kiro 9router',
  },
  {
    id: 'kr/deepseek-3.2-thinking',
    name: 'DeepSeek 3.2 Thinking',
    description: 'DeepSeek 3.2 via 9router',
  },
  {
    id: 'nvidia/deepseek-ai/deepseek-v4-pro',
    name: 'NVIDIA DeepSeek V4 Pro',
    description: 'DeepSeek V4 Pro via NVIDIA NIM',
  },
];

export const DEFAULT_CHAT_MODEL = 'kr/claude-sonnet-4.5';

// --- TAMBAHKAN INI UNTUK GENERATE TITLE CHAT ---
export const titleModel = 'kr/claude-haiku-4.5';

export const allowedModelIds = new Set(chatModels.map((model) => model.id));

export async function getCapabilities() {
  return {
    'kr/claude-sonnet-4.5': { reasoning: false, tools: true },
    'kr/claude-haiku-4.5': { reasoning: false, tools: true },
    'kr/deepseek-3.2-thinking': { reasoning: true, tools: false },
    'nvidia/deepseek-ai/deepseek-v4-pro': { reasoning: true, tools: false },
  };
}

export async function getModelAvailability(modelId: string) {
  return 'available';
}
