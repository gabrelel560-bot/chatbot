export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  // --- CLAUDE (KIRO) ---
  {
    id: 'kr/claude-sonnet-4.5',
    label: 'Claude Sonnet 4.5',
    apiIdentifier: 'kr/claude-sonnet-4.5',
    description: 'Claude Sonnet 4.5 via Kiro',
  },
  {
    id: 'kr/claude-sonnet-4.5-thinking',
    label: 'Claude Sonnet 4.5 (Thinking)',
    apiIdentifier: 'kr/claude-sonnet-4.5-thinking',
    description: 'Claude Sonnet 4.5 dengan fitur Reasoning',
  },
  {
    id: 'kr/claude-haiku-4.5',
    label: 'Claude Haiku 4.5',
    apiIdentifier: 'kr/claude-haiku-4.5',
    description: 'Claude Haiku 4.5 - Cepat & Ringan',
  },

  // --- DEEPSEEK & QWEN ---
  {
    id: 'kr/deepseek-3.2-thinking',
    label: 'DeepSeek 3.2 Thinking',
    apiIdentifier: 'kr/deepseek-3.2-thinking',
    description: 'DeepSeek 3.2 dengan Reasoning',
  },
  {
    id: 'kr/qwen3-coder-next',
    label: 'Qwen 3 Coder Next',
    apiIdentifier: 'kr/qwen3-coder-next',
    description: 'Model khusus Pemrograman / Coding',
  },

  // --- NVIDIA NIM ---
  {
    id: 'nvidia/deepseek-ai/deepseek-v4-pro',
    label: 'NVIDIA DeepSeek V4 Pro',
    apiIdentifier: 'nvidia/deepseek-ai/deepseek-v4-pro',
    description: 'DeepSeek V4 Pro via NVIDIA NIM',
  },
  {
    id: 'nvidia/minimaxai/minimax-m3',
    label: 'NVIDIA MiniMax M3',
    apiIdentifier: 'nvidia/minimaxai/minimax-m3',
    description: 'MiniMax M3 Multimodal via NVIDIA NIM',
  },
];

// Model default saat web dibuka pertama kali
export const DEFAULT_MODEL_NAME: string = 'kr/claude-sonnet-4.5';
