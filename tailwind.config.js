const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants : {
    extend: {
      backgroundColor: ['label-checked'],
      border: ['label-checked'],
      borderColor: ['label-checked'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => {
            const eClassName = e(`label-checked${separator}${className}`);
            const eSelector = 'input[type="radio"]';
            return `${eSelector}:checked ~ .${eClassName}`;
          }
        )
      })
    })

  ],
}
