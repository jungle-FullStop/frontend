/** @type {(tailwindConfig: object) => object} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(bg|text|font|w|h)-+/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('./src/assets/image/landingBackground.jpeg')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
});
