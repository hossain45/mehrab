module.exports = {
  content: ['./*/*.html', ],
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
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}