/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mycolor': '#B68C5A',
      },
      fontFamily: {
        'primaryFont': ['EB Garamond', 'serif'],
        'secondaryFont': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
