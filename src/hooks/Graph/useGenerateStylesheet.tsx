import cytoscape, { NodeCollection, SearchPageRankOptions } from 'cytoscape';

const nodeMaxSize = 50;
const nodeMinSize = 5;
const fontMaxSize = 8;
const fontMinSize = 5;

export function generateStylesheet(elements: any) {
  const cy_for_rank = cytoscape({
    elements: elements,
  });

  const pageOpt: SearchPageRankOptions = {};
  const pageRank = cy_for_rank.elements().pageRank(pageOpt);

  return [
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(label)',
        width: function (ele: NodeCollection) {
          return nodeMaxSize * pageRank.rank(ele) + nodeMinSize;
        },
        height: function (ele: NodeCollection) {
          return nodeMaxSize * pageRank.rank(ele) + nodeMinSize;
        },
        'font-size': function (ele: NodeCollection) {
          return fontMaxSize * pageRank.rank(ele) + fontMinSize;
        },
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        lineColor: '#ccc',
        sourceArrowColor: '#ccc',
        sourceArrowShape: 'triangle',
        curveStyle: 'bezier',
      },
    },
  ];
}
