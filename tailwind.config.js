/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{jsx,js,ts,tsx}',];
export const theme = {
  extend: {
    colors: {
      blue: {
        10: '#D0E9F2',
        20: '#253B6E',
        30: '#020659',
      },
      green: {
        10: '#C9EEF2',
        30: '#0FA68A',
        50: '#127361',
      },
      grey: {
        40: '#E4E7EB',
      },
    },
    backgroundImage:{
      'logo-img': "url('/logo-img.png')",
      'menu':"url('/menu.svg')",
    },
    screens:{
      xs: '400px',
      '3xl': '1680px',
      '4xl': '2200px',
    },
    maxWidth:{
      '10xl': '1512px',
    },
    borderRadius:{
      '5xl': '40px',
    },
  },
};
export const plugins = [];

