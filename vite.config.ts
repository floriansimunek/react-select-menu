import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    cssInjectedByJsPlugin(),
    dts({
      include: ['src/components/'],
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
      name: 'React-Select-Menu',
      formats: ['es', 'umd'],
      fileName: (format) => `react-select-menu.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        'react',
        'react-dom',
      ],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
