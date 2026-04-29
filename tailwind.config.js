/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0A09",
        obsidian: "#111110",
        coal: "#1A1816",
        ash: "#2A2724",
        gold: {
          DEFAULT: "#D4B061",
          50: "#FBF6E7",
          100: "#F2E5BD",
          200: "#E8D397",
          300: "#DEC178",
          400: "#D4B061",
          500: "#C29846",
          600: "#A47B30",
          700: "#7A5B24",
        },
        ivory: "#F2EAD7",
        cream: "#E9DEC3",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        couture: ['"Italiana"', '"Fraunces"', "ui-serif", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        mark: "0.16em",
        wide2: "0.22em",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(ellipse at top, rgba(212,176,97,0.15), transparent 60%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(212,176,97,0.6), transparent)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,176,97,0.25), 0 20px 60px -20px rgba(212,176,97,0.25)",
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 30px 80px -30px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
