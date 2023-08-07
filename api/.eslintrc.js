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
    quotes: [4, "double"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
