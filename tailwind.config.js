/** @type {(tailwindConfig: object) => object} */
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
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
        landing: "url('./src/assets/image/landingBackground.png')",
        grass: "url('./src/assets/Grass/Grass.png')",
        noGrass: "url('./src/assets/Grass/NoGrass.png')",
        stage1: "url('./src/assets/Grass/Sunflower_1.png')",
        stage2: "url('./src/assets/Grass/Sunflower_2.png')",
        stage3: "url('./src/assets/Grass/Sunflower_3.png')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/line-clamp')],
});
