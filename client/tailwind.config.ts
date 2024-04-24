import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "100%",
        "md": "100%",
        "lg": "100%",
        "xl": "100%",
        "2xl": "1300px"
      },
    },
    extend: {
      fontFamily: {
        default: ["var(--font-default)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],

        okineBold: ["var(--font-bold)"],
        okineBoldOutline: ["var(--font-okine-bold-outline)"],
        okineBlack: ["var(--font-okine-black)"],
        okineBlackOutline: ["var(--font-okine-black-outline)"],
        okine: ["var(--font-okine)"],
        okineMedium: ["var(--font-okine-medium)"],

        fitzgerald: ["var(--font-fitzgerald)"],
        fitzgeraldItalic: ["var(--font-fitzgerald-italic)"],
        fitzgeraldBold: ["var(--font-fitzgerald-bold)"],
        fitzgeraldBoldItalic: ["var(--font-fitzgerald-bold-italic)"]
      },
      colors: {
        "fl-pink": "var(--fl-pink)",
        "fl-blue": "var(--fl-blue)",
        "fl-purple": "var(--fl-purple)",
        "fl-white": "var(--fl-white)",
        "fl-green": "var(--fl-green)",
        "fl-orange": "var(--fl-orange)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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

        "white": "var(--novel-white)",
        "stone": {
          50: "var(--novel-stone-50)",
          100: "var(--novel-stone-100)",
          200: "var(--novel-stone-200)",
          300: "var(--novel-stone-300)",
          400: "var(--novel-stone-400)",
          500: "var(--novel-stone-500)",
          600: "var(--novel-stone-600)",
          700: "var(--novel-stone-700)",
          800: "var(--novel-stone-800)",
          900: "var(--novel-stone-900)"
        }
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
        "spin-slow": "spin 1.5s linear infinite"
      },
    },
  },
  plugins: [
  require("tailwindcss-animate"),
  require("@tailwindcss/typography"),
  require("windy-radix-palette")
  ],
} satisfies Config

export default config