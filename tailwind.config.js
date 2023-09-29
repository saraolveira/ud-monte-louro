/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      slate: colors.slate,
      'big-stone': {
          '50': '#f3f7fc',
          '100': '#e6eef8',
          '200': '#c6dcf1',
          '300': '#94c0e5',
          '400': '#5b9ed5',
          '500': '#3682c1',
          '600': '#2666a3',
          '700': '#205384',
          '800': '#1e476e',
          '900': '#1e3c5c',
          '950': '#122337',
      },
    'fountain-blue': {
        '50': '#f0fbfb',
        '100': '#d9f2f4',
        '200': '#b8e7e9',
        '300': '#88d3d8',
        '400': '#5fbec6',
        '500': '#349ba6',
        '600': '#2e7f8c',
        '700': '#2b6773',
        '800': '#2a5660',
        '900': '#274852',
        '950': '#152f37',
      },
      'monarch': {
          '50': '#fff0f1',
          '100': '#ffe2e3',
          '200': '#ffc9ce',
          '300': '#ff9da7',
          '400': '#ff6678',
          '500': '#ff304e',
          '600': '#f10d38',
          '700': '#cc042f',
          '800': '#aa072f',
          '900': '#7b0828',
          '950': '#520014',
      },    
    },
    extend: {
      fontFamily: {
        display: 'Playfair Display',
        body: 'Open Sans',
      },
    },
  },
  plugins: [],
}

