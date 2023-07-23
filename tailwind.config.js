/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#e7e3ed",
        background: "#0e0c12",
        primary: "#3a2f51",
        secondary: "#131018",
        accent: "#726293",
      },
    },
  },
  plugins: [],
};
