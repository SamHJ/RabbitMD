const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);

const purgecss = postcssPurgecss({
  // Specify the paths to all of the template files
  //to be purged in this project.
  content: [
    "./public/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.html",
    "./src/**/*.ts",
    "./src/**/*.js",
  ],
  // Include any special characters you're using in this regular expression.
  // See: https://tailwindcss.com/docs/controlling-file-size/#understanding-the-regex
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  // Whitelist auto generated classes for transitions and router links.
  // From: https://github.com/ky-is/vue-cli-plugin-tailwind
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
  ],
});

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer"), purgecss],
};
