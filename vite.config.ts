/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 8080,
    hmr: true,
  },
  preview: {
    port: 8081,
  },
  build: {
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@public': path.resolve(__dirname, 'public'),
      '@src': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@atom': path.resolve(__dirname, 'src/components/atoms'),
      '@block': path.resolve(__dirname, 'src/components/blocks'),
      '@page': path.resolve(__dirname, 'src/components/pages'),
      '@store': path.resolve(__dirname, 'src/stores'),
      '@router': path.resolve(__dirname, 'src/routers'),
      '@hook': path.resolve(__dirname, 'src/hooks'),
      '@util': path.resolve(__dirname, 'src/utils'),
      '@const': path.resolve(__dirname, 'src/consts'),
    },
  },
});
