/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", // 根目錄的 HTML
    "./about.html", // 根目錄的 HTML
    "./products.html", // 根目錄的 HTML
    "./support.html", // 根目錄的 HTML
    "./industries.html", // 根目錄的 HTML
    "./contact.html", // 根目錄的 HTML
    "./login.html", // 根目錄的 HTML
    "./src/**/*.{html,js}", //   src 目錄的所有 HTML/JS 檔案
    "./src/components/**/*.{html,js}", // src/components 目錄的所有 HTML 檔案
    "./src/**/*.{js,ts,jsx,tsx}", // src 裡的所有 JS/TS 檔案
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5559FF",
        gradient: {
          1: "#00C5E8",
          2: "#BD5CDB",
        },
        natural: {
          1: "#F9F9F9",
          2: "#F3F4F6",
          3: "#E5E7EB",
          4: "#D1D5DB",
          5: "#9CA3AF",
          6: "#6B7280",
          7: "#374151",
          8: "#111827",
        },
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",

      },
      fontFamily: {
        ch: ["Noto Sans", "JetBrains"],
        en: ["Arial", "Helvetica", "sans-serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      
    },
    
  },
  plugins: []
}