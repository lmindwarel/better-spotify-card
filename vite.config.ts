import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/better-spotify-card.ts'),
      name: 'BetterSpotifyCard',
      fileName: () => 'better-spotify-card.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
      },
    },
    minify: 'terser',
    sourcemap: true,
  },
});
