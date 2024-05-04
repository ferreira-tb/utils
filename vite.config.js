import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: false })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/array.ts'),
        resolve(__dirname, 'src/panic.ts'),
        resolve(__dirname, 'src/regex.ts')
      ],
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        return format === 'es' ? `${entryName}.js` : `${entryName}.cjs`;
      }
    }
  }
});
