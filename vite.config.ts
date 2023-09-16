import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/component/'],
    }),
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@types': '/src/types/index.d.ts',
    },
  },
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'React-SelectMenu',
      formats: ['es', 'umd'],
      fileName: (format) => `react-selectmenu.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
    },
  },
});
