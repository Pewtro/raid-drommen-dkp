import putstackConfig from '@putstack/prettier-config';

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  ...putstackConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
