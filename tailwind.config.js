/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Segoe UI', 'Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        'base-wa': '0px',
        'xs-wa': '660px',
        'sm-wa': '960px',
        'md-wa': '1095px',
      },
      screens: {
        'sm-whatsapp': '660px',
        // => @media (min-width: 640px) { ... }

        '2sm-whatsapp': '759px',
        'smd-whatsapp': '794px',

        'md-whatsapp': '1095px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'xl-whatsapp': '1728px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
