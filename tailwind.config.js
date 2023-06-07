/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "rgb(5, 102, 141)",
        lightBlue: "rgb(66, 122, 161)",
        offWhite: "rgb(235, 242, 250)",
        darkGreen: "rgb(103, 148, 54)",
        lightGreen: "rgb(165, 190, 0)",
      },
    },
  },
  plugins: [],
};
