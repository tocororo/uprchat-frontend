module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
  overrides: [
    {
      files: ["**/*.css", "**/*.scss", "**/*.html"],
      options: {
        singleQuote: false,
      },
    },
  ],
  semi: true,
  vueIndentScriptAndStyle: true,
  trailingComma: "none",
  printWidth: 100,
  tabWidth: 2,
};
