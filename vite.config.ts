import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'url';

// Update version.json with new timestamp
const updateVersion = () => {
  const versionPath = resolve(fileURLToPath(new URL('.', import.meta.url)), 'public/version.json');
  const version = {
    version: (process?.env?.npm_package_version as string) || '1.0.0',
    timestamp: new Date().toISOString()
  };
  fs.writeFileSync(versionPath, JSON.stringify(version, null, 2));
};

// Run version update
updateVersion();

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: false,
    headers: {
      'Cache-Control': 'no-store',
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion'],
        }
      }
    }
  },
  preview: {
    port: 5173,
    host: true,
    open: false,
    headers: {
      'Cache-Control': 'no-store',
    }
  },
});