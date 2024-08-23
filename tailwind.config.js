/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {  
        customGrey: '#2B2F4C',  // Add your custom hex color here  
      },  
    },
  },
  plugins: [],
}

