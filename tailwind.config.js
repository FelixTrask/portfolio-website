/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1e1e1e',
        'header-dark': '#282c34',
        'text-main': '#ffffff',
        'text-sub': '#dcdcdc',
        'highlight': '#ff6347',
        'highlight-alt': '#ff4500',
        'skill': '#ffcc00',
        'accent': '#ffa500',
        'card-bg': '#333333',
        'footer-text': '#b0b0b0',
      },
      borderRadius: {
        'lg': '12px',
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        'xs': '0.9rem',
      }
    },
  },
  plugins: [],
}

