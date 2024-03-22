/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'drizzle'],
  extends: ['next/core-web-vitals', '@putstack/typescript', 'plugin:drizzle/recommended'],
  rules: {},
};

module.exports = config;
