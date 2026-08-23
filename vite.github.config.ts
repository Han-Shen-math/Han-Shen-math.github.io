import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: fileURLToPath(new URL('./github-pages', import.meta.url)),
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  base: '/',
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: fileURLToPath(new URL('./github-pages-dist', import.meta.url)),
  },
  resolve: {
    alias: {
      '@': projectRoot,
    },
  },
});
