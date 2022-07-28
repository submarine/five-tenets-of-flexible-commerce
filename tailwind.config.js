// tailwind.config.js

module.exports = {
  content: [
    './_layouts/**/*.{html,js}',
    './index.html'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
  ]
};
