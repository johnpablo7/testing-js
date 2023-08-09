/* eslint quotes: ["error", "double"] */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: [2, "double"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
