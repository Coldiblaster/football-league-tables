import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: '#03045E',
          dark: '#032174',
          medium: '#023E8A',
          light: '#015BA0',
          lightest: '#0077B6',
        },
        neutral: {
          darkest: '#181818',
          dark: '#5D5D5D',
          medium: '#999999',
          light: '#D9D9D9',
          lightest: '#FFFFFF',
        },
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(180deg, hsla(0, 0%, 85%, 1) 0%, hsla(206, 99%, 32%, 1) 62%, hsla(239, 94%, 19%, 1) 97%)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
