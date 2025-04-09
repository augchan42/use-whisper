import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react'],
  sourcemap: true,
  treeshake: true,
  splitting: true,
  minify: process.env.NODE_ENV === 'production',
  outDir: 'dist',
  target: 'es2020',
  esbuildOptions: (options) => {
    if (process.env.NODE_ENV === 'production') {
      options.drop = ['console', 'debugger']
    }
  },
})
