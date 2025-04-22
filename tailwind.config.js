/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0f0f0f', // Dark background color
        'header-dark': '#282c34', // Header dark background
        'text-main': '#ffffff', // Main text color (white)
        'text-sub': '#dcdcdc', // Subtext color
        'highlight': '#ff6347', // Highlight color
        'highlight-alt': '#ff4500', // Alternate highlight color
        'skill': '#ffcc00', // Skill color
        'accent': '#ffa500', // Accent color
        'card-bg': '#333333', // Card background color
        'footer-text': '#b0b0b0', // Footer text color
        'blob-purple': '#6c63ff', // Blob purple color
        'blob-pink': '#ff6584', // Blob pink color
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 99, 255, 0.2)', // Glowing shadow effect
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        blob: 'blob 20s infinite ease-in-out', // Blobbing animation
      },
      borderRadius: {
        'lg': '12px', // Large border radius for rounding
      },
      fontSize: {
        'xs': '0.9rem', // Extra small font size
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',  // Large screens and up
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
