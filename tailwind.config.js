/** @type {(tailwindConfig: object) => object} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
      backgroundColor: {
        grassColor: '#B56F2A',
      },
      backgroundImage: {
        landing: "url('./src/assets/image/landingBackground.jpeg')",
        grass: "url('./src/assets/Grass/grass.png')",
        noGrass: "url('./src/assets/Grass/noGrass.png')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/line-clamp')],
});
