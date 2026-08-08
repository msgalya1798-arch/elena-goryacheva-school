import type { Config } from "tailwindcss";

// Все цвета и размеры — прямые ссылки на CSS-переменные из globals.css.
// Источник истины по значениям: ТЗ v2.0, раздел 6.1 и 21.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px", // мобильный
        md: "40px", // планшет
        xl: "64px", // широкий десктоп
      },
    },
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        white: "var(--color-white)",
        violet: {
          DEFAULT: "var(--color-violet)",
          deep: "var(--color-violet-deep)",
        },
        lavender: "var(--color-lavender)",
        graphite: "var(--color-graphite)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        "section-sm": "64px",
        "section-lg": "144px",
      },
      borderRadius: {
        card: "22px",
      },
      transitionDuration: {
        reveal: "280ms",
      },
    },
  },
  plugins: [],
};

export default config;
