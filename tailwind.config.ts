import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Primary Safety Gold/Orange
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        slate: {
          850: "#172033",
          950: "#0b0f19",
        },
        theme: {
          primary: "var(--color-primary, #f59e0b)",
          "primary-hover": "var(--color-primary-hover, #d97706)",
          secondary: "var(--color-secondary, #0f172a)",
          accent: "var(--color-accent, #ea580c)",
          background: "var(--color-bg, #ffffff)",
          surface: "var(--color-surface, #f8fafc)",
          "surface-dark": "var(--color-surface-dark, #0f172a)",
          text: "var(--color-text, #0f172a)",
          "text-muted": "var(--color-text-muted, #64748b)",
          border: "var(--color-border, #e2e8f0)",
          success: "var(--color-success, #10b981)",
          error: "var(--color-error, #ef4444)",
        },
      },
      borderRadius: {
        btn: "var(--radius-btn, 0.5rem)",
        card: "var(--radius-card, 0.75rem)",
      },
      fontFamily: {
        heading: ["var(--font-heading, system-ui)", "sans-serif"],
        body: ["var(--font-body, system-ui)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
