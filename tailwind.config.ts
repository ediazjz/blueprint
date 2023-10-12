import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          ligther: "#D6E9FE",
          light: "#ADD2FC",
          DEFAULT: "#328FF8",
          dark: "#2D81DF",
          darker: "#2872C6",
        },
        secondary: {
          ligther: "#FFDBEE",
          light: "#FFB8DD",
          DEFAULT: "#FF4DAB",
          dark: "#E6459A",
          darker: "#CC3E89",
        },
        base: {
          light: "#FCFCFC",
          dark: "#2C2C2C",
        },
        feedback: {
          success: {
            DEFAULT: "#008A25",
            lighter: "#E6F3E9",
          },
          warning: {
            DEFAULT: "#F17114",
            lighter: "#FEF1E8",
          },
          error: {
            DEFAULT: "#CD1332",
            lighter: "#FAE7EB",
          },
        },
        gray: {
          50: "#F4F4F4",
          100: "#E9E9E9",
          200: "#D3D3D3",
          300: "#BEBDBD",
          400: "#A8A7A7",
          500: "#929191",
          600: "#7C7B7B",
          700: "#676565",
          800: "#514F4F",
          900: "#3B3939",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        "2xs": "0.625rem !important",
        xs: "0.75rem !important",
        sm: "0.875rem !important",
        base: "1rem !important",
        lg: "1.125rem !important",
        xl: "1.25rem !important",
        "2xl": "1.5rem !important",
        "3xl": "1.75rem !important",
        "4xl": "2rem !important",
        "5xl": "2.25rem !important",
        "6xl": "2.5rem !important",
        "7xl": "2.75rem !important",
        "8xl": "3rem !important",
        "9xl": "3.25rem !important",
        "10xl": "3.5rem !important",
        "11xl": "3.75rem !important",
        "12xl": "4rem !important",
        "13xl": "4.5rem !important",
      },
      lineHeight: {
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "2.5rem",
        "7xl": "2.75rem",
        "8xl": "3rem",
        "9xl": "3.25rem",
        "10xl": "3.5rem",
        "11xl": "3.75rem",
        "12xl": "4rem",
        "13xl": "4.5rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "13": "52px",
        "14": "56px",
        "15": "60px",
        "16": "64px",
        "18": "72px",
        "20": "80px",
        "22": "88px",
        "24": "96px",
        "26": "104px",
        "28": "112px",
        "30": "120px",
        "32": "128px",
        "34": "136px",
        "36": "144px",
        "38": "152px",
        "40": "160px",
        "44": "176px",
        "48": "192px",
        "52": "208px",
        "56": "224px",
        "60": "240px",
        "64": "256px",
        "68": "272px",
        "72": "288px",
        "76": "304px",
        "80": "320px",
        "84": "336px",
        "88": "352px",
        "92": "368px",
        "96": "384px",
      },
    },
  },
  plugins: [],
}
export default config
