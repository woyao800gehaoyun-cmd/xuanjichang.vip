import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0F17',
        card: '#131B2A',
        accent: '#00F0FF',
        status: '#10B981',
        warning: '#F59E0B',
      },
      boxShadow: {
        glow: '0 0 28px rgba(0, 240, 255, 0.16)',
        'glow-sm': '0 0 12px rgba(0, 240, 255, 0.24)',
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#b7c3d4',
            '--tw-prose-headings': '#f7fbff',
            '--tw-prose-links': '#00F0FF',
            '--tw-prose-bold': '#f7fbff',
            '--tw-prose-code': '#9cecf1',
            '--tw-prose-quotes': '#d7e4ef',
            '--tw-prose-quote-borders': '#00F0FF',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
