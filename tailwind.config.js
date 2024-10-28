/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: '#062E32',
        customAccent: '#00A67D',
        customSecondary: '#F1E6E0',
        customPrimary: '#E2FFCF',
      },
      textColor: {
        customMainHeading: '#E2FFCF',
        customBodyD: '#BACFC2',
        customBodyL: '#FCFAF9',
      },
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
      // fontSize: {
      //   h1: ['64px', { lineHeight: '72px', fontWeight: '900' }],
      //   h2: ['42px', { lineHeight: '56px', fontWeight: '700' }],
      //   h3: ['26px', { lineHeight: '30px', fontWeight: '600' }],
      //   body: ['18px', { lineHeight: '30px', fontWeight: '500' }],
      // },
    },
  },
  plugins: [],
};
