const nodeMaxSize = 50;
const nodeMinSize = 5;
const fontMaxSize = 8;
const fontMinSize = 5;

export function generateStylesheet() {
  return [
    {
      selector: 'node',
      style: {
        label: 'data(label)',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        lineColor: '#ccc',
        sourceArrowShape: 'triangle',
        curveStyle: 'bezier',
      },
    },
  ];
}
