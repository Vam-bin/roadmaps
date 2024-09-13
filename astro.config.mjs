// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // Changed adapter to Vercel
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://your-vercel-url.com/', // Update this to your Vercel deployment URL
  markdown: {
    shikiConfig: {
      theme: 'dracula', // You can change the theme if you want
    },
  },
  output: 'static', // Change to static for fully static site generation
  adapter: vercel(), // Vercel adapter for deployment
  trailingSlash: 'never',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
});
