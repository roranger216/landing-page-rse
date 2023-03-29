

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       height:{
      'h-13':'48px',
    },
      colors: {
        gold: {
          50: "#fdf6e3",
          100: "#fae6b3",
          200: "#f3d17a",
          300: "#eca646",
          400: "#e99722",
          500: "#e28904",
          600: "#c77206",
          700: "#a75d08",
          800: "#874608",
          900: "#6d3808",
        },
      },
      dropShadow: {
        w2xl: "0 5px 10px rgba(255, 255, 255, 0.2)",
      },
     // inset:{
      //   'left-5/6':'83%',
      // }
    },
  
  },
  variants: {},
  plugins: [],
};
