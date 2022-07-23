module.exports = {
  mode: 'jit',
  important: true,
  darkMode: ['class'],
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
        'section1_backrgound': "url('/assets/logo.svg')",
        'triangle': "linear-gradient(to right, #1ee9a2, #75aefc)",
        'contact_background':"linear-gradient(149.71deg, #19F18F 15.05%, #4EC1F6 65.37%, #E582FC 95.99%)",
        'intro_background': "linear-gradient(30.71deg, #19F18F 25.05%, #4EC1F6 70.37%, #E582FC 95.99%)",
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
      screens: {
        xs: "450px",
        sm: "720px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        "sm-max": { max: "600px" },
        "md-max": { max: "960px" },
        "lg-max": { max: "1280px" },
        "xl-max": { max: "1920px" },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
