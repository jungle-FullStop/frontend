export function generateStylesheet() {
  return [
    {
      selector: 'node',
      style: {
        backgroundColor: '#ffd54f',
        label: 'data(label)',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        lineColor: '#ccc',
        sourceArrowColor: '#000',
        sourceArrowShape: 'triangle',
        curveStyle: 'bezier',
      },
    },
  ];
}
