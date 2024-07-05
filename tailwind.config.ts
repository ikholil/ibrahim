import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        "neutral-0": "#FFFFFF",
        "neutral-10": "#FAFAFB",
        "neutral-20": "#F5F6F7",
        "neutral-30": "#EBECEF",
        "neutral-40": "#DFE0E4",
        "neutral-50": "#C1C4CC",
        "neutral-60": "#B2B6BF",
        "neutral-70": "#A6AAB5",
        "neutral-80": "#979CA8",
        "neutral-90": "#888E9C",
        "neutral-100": "#798090",
        "neutral-200": "#6A7283",
        "neutral-300": "#5B6477",
        "neutral-400": "#4F586D",
        "neutral-500": "#404A60",
        "neutral-600": "#343E56",
        "neutral-700": "#222E48",
        "neutral-800": "#23262B",
        "neutral-900": "#1D1E24",
        "transparent": "transparent"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1600px",
        "4xl": "1800px"
      },
    },
  },
  plugins: [],
};
export default config;
