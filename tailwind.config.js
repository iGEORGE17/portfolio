/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      headers: ["Monofett", "cursive"],
      content: ["Poppins", "sans serif"]

    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
