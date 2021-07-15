const purgecss = require("@fullhuman/postcss-purgecss");

const purgecssOptions = {
  content: [
    "./src/**/*.html",
    "./src/**/*.svelte",
    "./node_modules/bootstrap/js/dist/alert.js",
    "./node_modules/bootstrap/js/dist/collapse.js",
    "./node_modules/bootstrap/js/dist/dropdown.js",
    "./node_modules/bootstrap/js/dist/modal.js",
    "./node_modules/bootstrap/js/dist/offcanvas.js",
    "./node_modules/bootstrap/js/dist/toast.js",
  ],
  defaultExtractor: (content) => {
    const _content = content.replace(/(?:^|\s)class:/g, " ");
    return _content.match(/[\w-/:]+(?<!:)/g) || [];
  },
  safelist: [/svelte-/, /ratio-/],
};

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === "production"
      ? [purgecss(purgecssOptions)]
      : []),
  ],
};
