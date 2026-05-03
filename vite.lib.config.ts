import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import preserveDirectives from 'rollup-plugin-preserve-directives'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ include: ['src/components', 'src/utils', 'src/index.ts'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Brutalistic',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      output: [
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
          entryFileNames: '[name].es.js',
        },
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
          entryFileNames: '[name].cjs.js',
          exports: 'named',
        },
      ],
      plugins: [preserveDirectives()],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
