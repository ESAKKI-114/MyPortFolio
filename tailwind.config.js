module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'], // For headings
        body: ['Lato', 'sans-serif'], // For body text
      },
    },
  },
  plugins: [],
}