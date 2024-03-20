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
        primary: "#000000",
        secondary: "#FFFFFF",
      },
      fontSize: {
        xxs: "12px",
        xs: "15px",
        base: "16px", // Base font size
        sm: "22px",
        md: "26px", // Small font size
        xm: "30px",
        lg: "55px", // Large font size
        xl: "120px", // Extra large font size
        marqueeSmallSize: "130px",
        marqueeMediumSize: "200px",
        marqueeLargeSize: "300px",
      },
    },
  },
  variants: {},
  plugins: [],
}
