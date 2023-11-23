import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "15": "60px",
      },
      colors: {
        darkGreen: "#01744D",
        lightGreen: "#4BA97E",
        midNight: "#4A5CA9",
      },
      transitionProperty: {
        height: "height",
        backgroundColor: "backgroundColor",
      },
      backgroundImage: {
        "teamspace-img": "url('/img/students.jpg')",
      },
      keyframes: {
        dropdown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-5%)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0%)",
          },
        },
        "dropdown-close": {
          "0%": {
            opacity: "100%",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-5%)",
          },
        },
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        dropdown: "dropdown 0.5s ease-in-out forwards",
        "dropdown-close": "dropdown-close 0.2s ease-in-out forwards",
      },
    },
    fontSize: {
      t1: [
        "57px",
        {
          fontWeight: "700",
          lineHeight: "1.4",
        },
      ],
      t2: [
        "45px",
        {
          lineHeight: "1.4",
        },
      ],
      h1: ["36px", "36px"],
      h2: ["32px", "32px"],
      h3: ["28px", "28px"],
      h4: ["24px", "24px"],
      b1: ["20px", "20px"],
      b2: ["16px", "16px"],
      b3: ["13px", "13px"],
      b4: ["11px", "11px"],
    },
  },
  plugins: [],
};
export default config;
