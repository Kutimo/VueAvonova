/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: [" Vollkorn", "Cambria", "Times New Roman"],
      body: ["GT-Walsheim", "Helvetica", "sans-serif"]
    },
    extend: {
      colors: {
        primary: '#028655',
        green: {
          100: '#f4ffff',
          200: '#e0fff9',
          300: '#aff0e5',
          400: '#7eeedb',
          500: '#4ee8cc',
          600: '#27ddbb',
          700: '#09cca6',
          800: '#00ad8c',
          900: '#00866d',
          1000: '#005646',
          1100: '#01332a',
          1200: '#00211b',
        },
        secondary: '#b4e0d1',
        gray: '#f0f4f3',
        gray600: '#595959',
        neutral: {
          100: '#faf7f6',
          200: '#f5e7e1',
          300: '#daaa93',
          400: '#b07f68',
          500: '#7d594a',
          600: '#593d34',
        },
        accent: '#ffbe83',
        purple: {
          100: '#edddff',
          200: '#cb9cff',
          300: '#9242eb',
          400: '#500a9e',
        },
        orange: {
          100: '#fff6eb',
          200: '#ffdcaf',
          300: '#f9a035',
          400: '#fe8800',
        },
        red: '#bb1d1d',
        black: '#272727',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
