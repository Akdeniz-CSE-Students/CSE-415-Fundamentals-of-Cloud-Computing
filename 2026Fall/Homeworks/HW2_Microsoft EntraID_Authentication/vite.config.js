import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use absolute base in production to avoid asset path issues on Azure.
  // If you need relative paths for special hosting, revert to './'.
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
});

