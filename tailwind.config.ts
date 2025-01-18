import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        "fill-available": "-webkit-fill-available",
      },
      minHeight: {
        "fill-available": "-webkit-fill-available",
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
      minWidth: {
        "fill-available": "-webkit-fill-available",
      },
      fontFamily: {
        sans: ["var(--font-gelica)", ...fontFamily.sans],
        dahliaLight: ["var(--font-dahlia-light)"],
        dahlia: ["var(--font-dahlia)"],
        dahliaBold: ["var(--font-dahlia-bold)"],
        gelica: ["var(--font-gelica)"],
        monoLisa: ["var(--font-monolisa)"],
      },
      maxWidth: {
        // classic: "1227px",
        // classic: "1024px",
        classic: "1100px",
      },
      aspectRatio: {
        "21/9": "21 / 9",
        phone: "9 / 16",
      },
      colors: {
        stack: {
          threejs: "#222222",
          unreal: "#222222",
          javascript: "#f7e025",
          javascriptStroke: "#dac316",
          figma1: "#00cf7f",
          figma2: "#b659ff",
          figma3: "#ff4d12",
          figma4: "#ff7361",
          figma5: "#00bcff",
          illustrator: "#ff9d08",
          python1: "#3d77a8",
          python2: "#ffd146",
          nodejs1: "#393939",
          nodejs2: "#79af69",
          photoshop: "#37abff",
          afterEffect: "#9c9cff",
          react: "#66dbfb",
          typescript: "#087ece",
          nextjs: "#222222",
          django: "#32ac7b",
          tensorflow: "#ff9308",
          webflow: "#1a72f5",
          blender: "#eb7a08",
          gsap: "#0ae448",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        foregroundAlt: "hsl(var(--foreground-alt))",
        link: "hsl(var(--link))",
        code: {
          DEFAULT: "hsl(var(--code))",
        },
        pigment: {
          pink: "hsl(var(--pigment-pink))",
          purple: "hsl(var(--pigment-purple))",
          blue: "hsl(var(--pigment-blue))",
          blueLighter: "hsl(var(--pigment-blue-lighter))",
          orange: "hsl(var(--pigment-orange))",
          orangeLighter: "hsl(var(--pigment-orange-lighter))",
          pinker: "hsl(var(--pigment-pinker))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        highlighted: {
          DEFAULT: "hsl(var(--highlighted))",
          foreground: "hsl(var(--highlighted-foreground))",
          foregroundLight: "hsl(var(--highlighted-foregroundLight))",
          dark: "hsl(var(--highlighted-dark))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        logo: {
          DEFAULT: "hsl(var(--logo))",
          foreground: "hsl(var(--logo-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
