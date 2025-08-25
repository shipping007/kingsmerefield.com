
import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1A3C",
        gold: "#D4AF37",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: []
}
export default config
