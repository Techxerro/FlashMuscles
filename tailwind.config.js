/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brastika: ["Brastika", "sans-serif"],
        body:["Lausanne" ,"serif"]
      },
    },
  },
  plugins: [],
};
