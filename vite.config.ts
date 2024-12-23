import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react({
    plugins: [["@swc/plugin-styled-components", {}]]
  })],
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
    alias: [
      { find: '@', replacement: resolve(__dirname, '.')},
      { find: '@public', replacement: resolve(__dirname, 'public')},
      { find: '@src', replacement: resolve(__dirname, 'src')},
      { find: '@comp', replacement: resolve(__dirname, 'src/components')},
      { find: '@atom', replacement: resolve(__dirname, 'src/components/atoms')},
      { find: '@block', replacement: resolve(__dirname, 'src/components/blocks')},
      { find: '@page', replacement: resolve(__dirname, 'src/components/pages')},
      { find: '@store', replacement: resolve(__dirname, 'src/stores')},
      { find: '@router', replacement: resolve(__dirname, 'src/routers')},
      { find: '@hook', replacement: resolve(__dirname, 'src/hooks')},
      { find: '@util', replacement: resolve(__dirname, 'src/utils')},
      { find: '@const', replacement: resolve(__dirname, 'src/consts')},
    ]
  },
});
