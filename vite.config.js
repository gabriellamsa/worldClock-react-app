import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-tooltip': 'react-tooltip/dist/index.js' // Corrigir o caminho se necessário
    }
  }
});
