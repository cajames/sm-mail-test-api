var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./assets/tailwind.js'),
    require('autoprefixer'),
  ]
}
