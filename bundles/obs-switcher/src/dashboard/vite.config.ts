/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bundles/obs-switcher/dashboard',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup-vitest.ts',
    /**
     * for in-source testing.
     * {@link https://vitest.dev/guide/in-source.html}
     */
    includeSource: ['{src,integrationTest,docs}/**/*.{ts,tsx}'],
  },
  build: {
    outDir: '../../dashboard', // 出力ディレクトリを指定
    assetsDir: '',
    emptyOutDir: true, // 出力ディレクトリをビルド前にクリア
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
      '@root/': `${__dirname}/`,
    },
  },
});
