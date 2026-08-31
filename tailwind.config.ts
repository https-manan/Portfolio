import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#EDE6D8",
        "bg-alt": "#E3DAC9",
        ink: "#16140F",
        muted: "#5A5546",
        line: "rgba(22,20,15,0.16)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1040px",
      },
    },
  },
  plugins: [],
};

export default config;
