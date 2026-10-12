import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EE',
        cream: '#EEE8DC',
        ink: '#172033',
        muted: '#697386',
        line: '#DCD5C8',
        brand: '#3157D5',
        'brand-dark': '#233D9F',
        coral: '#F26B4A',
        mint: '#1E9E78',
        sun: '#F5B942',
      },
      boxShadow: {
        card: '0 18px 50px rgba(49, 45, 36, 0.08)',
        lift: '0 24px 70px rgba(49, 87, 213, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3f4859',
            '--tw-prose-headings': '#172033',
            '--tw-prose-links': '#3157D5',
            '--tw-prose-bold': '#172033',
            '--tw-prose-counters': '#697386',
            '--tw-prose-bullets': '#F26B4A',
            '--tw-prose-hr': '#DCD5C8',
            '--tw-prose-quotes': '#172033',
            '--tw-prose-quote-borders': '#3157D5',
            '--tw-prose-code': '#233D9F',
            '--tw-prose-pre-bg': '#172033',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
