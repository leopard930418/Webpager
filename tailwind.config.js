module.exports = {
  mode: 'jit',
  important: true,
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title_font_family': ['ui-sans-serif', 'Poppins']
      },
      backgroundImage: {
        'section1_backrgound': "url('/assets/logo.png')",
        'triangle': "linear-gradient(to right, #1ee9a2, #75aefc)",
      },
      
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '%50': '50%',
        '16': '4rem'
      },
      z_index: {
        '-1': '0',
        '0': '10',
        '1': '20',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
