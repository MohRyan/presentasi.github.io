/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fisrt: "#5E5A00",
        second: "#FF0000",
        link: "#50C4ED",
        page: "#CECECE"
      }
    },
  },
  plugins: [],
}

