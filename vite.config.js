import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/anbbot/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('/home/runner/work/anbbot/anbbot'),
    }
  },
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
  }
});
