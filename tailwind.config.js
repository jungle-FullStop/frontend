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
      textColor: {
        gold: '#D5A11E',
        silver: '#A3A3A3',
        bronze: '#CD7F32',
      },
      borderColor: {
        gold: '#D5A11E',
        silver: '#A3A3A3',
        bronze: '#CD7F32',
      },
      backgroundColor: {
        grassColor: '#B35B1C',
      },
      backgroundImage: {
        landing: "url('/images/landingBackground.jpg')",
        grass: "url('/Grass/Grass.png')",
        noGrass: "url('/Grass/NoGrass.png')",
        stage1: "url('/Grass/RedCabbage_1.png')",
        stage2: "url('/Grass/RedCabbage_2.png')",
        stage3: "url('/Grass/RedCabbage_3.png')",
        stage4: "url('/Grass/RedCabbage_4.png')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/line-clamp')],
});
