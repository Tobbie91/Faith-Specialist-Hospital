/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "sans-serif"],
        felix: ["Felix", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        cards: {
          100: "#EA4335",
          200: "#34A853",
          300: "#4285F4",
          400: "#FDE293",
          500: "#000000",
          600: "#F9AB00",
        },
        text: {
          dark: "#0D0D0D",
        },
      },
    },
    screens: {
      xs: "350px",
      375: "375px",
      390: "390px",
      430: "430px",
      md: "768px",
      lg: "1024px",
      1120: "1120px",
      1200: "1200px",
      xl: "1280px",
      1380: "1380px",
      xxl: "1440px",
    },
    backgroundImage: {
      'hero-gradient': 'linear-gradient(107.15deg, rgba(100,100,100,0.7) 0%, rgba(255,120,140,0.3) 100%), linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.3))',
    }
    
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
