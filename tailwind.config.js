/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4ECDD",
        cream: "#EFE6D2",
        ink: "#141210",
        coal: "#2A2520",
        rust: "#B23A1F",
        saffron: "#D9712B",
        marigold: "#E5A23A",
        indigo: "#1E2F58",
        teal: "#1A5E5A",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        'mark': '0.18em',
      },
    },
  },
  plugins: [],
};
