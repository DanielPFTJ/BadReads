/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': ["Lakki Reddy"],
        inter: ["Inter", 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 1.2s linear infinite',
        'spin-slower': 'spin 1.4s linear infinite',
        'bounce-slow': 'bounce 1.2s linear infinite',
        'bounce-slower': 'bounce 1.4s linear infinite',
      }
    },
  },
  plugins: [],
};
