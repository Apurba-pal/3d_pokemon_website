import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // 👈 ensures assets load correctly after deployment
  build: {
    outDir: 'dist', // 👈 default output folder
  },
})
