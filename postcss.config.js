// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {}, // ✅ для v3 это правильно
    autoprefixer: {}, // можно оставить или убрать — не критично
  },
};