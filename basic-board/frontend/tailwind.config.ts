import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      grayDark: '#273444',
      gray: '#8492a6',
      grayLight: '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
