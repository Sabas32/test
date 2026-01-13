/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        "tak-dark": "#0f172a",
        "tak-accent": "#6366f1"
      },
      boxShadow: {
        "soft": "0 12px 30px -16px rgba(15, 23, 42, 0.35)",
        "soft-dark": "0 12px 30px -18px rgba(148, 163, 184, 0.45)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
