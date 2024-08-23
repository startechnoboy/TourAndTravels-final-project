import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line no-unused-vars
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: All node_modules packages will be bundled into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          // Optionally, you can create more specific chunks based on your project needs
          // Example:
          if (id.includes('src/components/YourLargeComponent')) {
            return 'large-component';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the limit to suppress the warning
  },
})
