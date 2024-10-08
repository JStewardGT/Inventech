/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue50: "#f1f8fe",
        Blue100: "#e3effb",
        Blue200: "#c0dff7",
        Blue300: "#89c6f0",
        Blue400: "#4aa9e6",
        Blue500: "#238ed4",
        Blue600: "#1471b5",
        Blue700: "#125a92",
        Blue800: "#134c79",
        Blue900: "#154165",
        Blue950: "#102f4c",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#125a92",
          "secondary": "#f0f4f8",
          "accent": "#ffb703",
          "neutral": "#2d2d2d",
          "base-100": "#ffffff",
          "info": "#3ab0ff",
          "success": "#38b000",
          "warning": "#ffba08",
          "error": "#d00000",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}
