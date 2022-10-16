/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**",
  ],
  theme: {
    extend: {
      colors: {
        "ego-moss-green-500": "#606c38",
        "ego-moss-green-900": "#283618",
        "ego-corn-silk-500": "#fefae0",
        "ego-sahara-brown-500": "#dda15e",
        "ego-sahara-brown-900": "#bc6c25",
        "cyber-black-500": "#01000d",
        "cyber-mint-500": "#05F2AF",
        "cyber-electric-yellow-500": "#F2E205",
        "cyber-electric-blue-500": "#609AD9",
        "cyber-burnt-orange-500": "#BF5934",
      },
    },
  },
  plugins: [],
};
