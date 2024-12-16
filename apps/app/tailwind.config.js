const { nextui } = require('@nextui-org/theme');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../node_modules/@nextui-org/theme/dist/components/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      darkMode: 'class',
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#28478A',
              foreground: '#F3F5F7',
            },
            accent: {
              DEFAULT: '#05B5B4',
            },
            secondary: '#F3F5F7',
            secondaryText: '#596780',
          },
        },
      },
      defaultTheme: 'light',
    }),
  ],
};
