import { join } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: false,
      exclude: ['node_modules/**', 'test/**/*'],
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: join(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
  },
});
