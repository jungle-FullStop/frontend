import cytoscape, { NodeCollection, SearchPageRankOptions, SearchPageRankResult } from 'cytoscape';
import * as graph from '@/util/Constants/mindmapConstants';

export function getPageRank(elements: any): SearchPageRankResult {
  const cy_for_rank = cytoscape({
    elements: elements,
  });

  const pageOpt: SearchPageRankOptions = {};
  const pageRank = cy_for_rank.elements().pageRank(pageOpt);
  return pageRank;
}

export function generateStylesheet(pageRank: SearchPageRankResult) {
  return [
    {
      selector: 'node',
      style: {
        'background-color': graph.nodeColor,
        label: 'data(label)',
        width: function (ele: NodeCollection) {
          return graph.nodeMaxSize * pageRank.rank(ele) + graph.nodeMinSize;
        },
        height: function (ele: NodeCollection) {
          return graph.nodeMaxSize * pageRank.rank(ele) + graph.nodeMinSize;
        },
        'font-size': function (ele: NodeCollection) {
          return graph.fontMaxSize * pageRank.rank(ele) + graph.fontMinSize;
        },
      },
      color: graph.nodeColor,
    },
    {
      selector: 'edge',
      style: {
        width: graph.edgeWidth,
        lineColor: graph.edgeColor,
        sourceArrowColor: graph.edgeColor,
        sourceArrowShape: 'triangle',
        curveStyle: 'bezier',
        arrowScale: graph.arrowScale,
      },
    },
  ];
}
