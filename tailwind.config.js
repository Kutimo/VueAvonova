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
    spacing: {
      "4": "4px",
      "6": "6px",
      "8": "8px",
      "10": "10px",
      "12": "12px",
      "16": "16px",
      "18": "18px",
      "20": "20px",
      "24": "24px",
      "28": "28px",
      "30": "30px",
      "32": "32px",
      "36": "36px",
      "40": "40px",
      "48": "48px",
      "52": "52px",
      "56": "56px",
      "64": "64px",
      "80": "80px",
      "96": "96px",
      "120": "120px",
      "160": "160px"
    },
    radius: {
      // --radius - 4: 0.25rem;
      // --radius - 6: 0.375rem;
      // --radius - 8: 0.5rem;
      // --radius - 10: 0.625rem;
      // --radius - 16: 1rem;
      // --radius - 24: 1.5rem;
      // --radius - 28: 1.75rem;
    }
  },
  plugins: [],
};
