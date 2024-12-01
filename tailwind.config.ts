import type { Config } from 'tailwindcss';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  plugins: [typography, containerQueries],
} satisfies Config;
