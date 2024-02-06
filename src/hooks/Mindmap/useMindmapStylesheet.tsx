import { NodeCollection } from 'cytoscape';
import * as graph from '@/util/Constants/mindmapConstants';
import { getPageRank } from '@hooks/Mindmap/useGetPageRank.ts';

import typeormImage from '@assets/mindmapImage/typeormImage.png';
import typescriptImage from '@assets/mindmapImage/typescriptImage.png';
import tailwindImage from '@assets/mindmapImage/tailwindImage.jpg';
import nginxImage from '@assets/mindmapImage/nginxImage.png';
import dockerImage from '@assets/mindmapImage/dockerImage.png';
import cytoscapejsImage from '@assets/mindmapImage/cytoscapejsImage.png';
import jotaiImage from '@assets/mindmapImage/jotaiImage.png';
import zustandImage from '@assets/mindmapImage/zustandImage.png';
import recoilImage from '@assets/mindmapImage/recoilImage.png';
import redisImage from '@assets/mindmapImage/redisImage.png';
import nestjsImage from '@assets/mindmapImage/nestjsImage.png';
import reactImage from '@assets/mindmapImage/reactImage.png';
import logoImage from '@assets/image/logo.png';
import teamLogoImage from '@assets/image/logo-team.png';

export function generateStylesheet(elements: any): any {
  const pageRank = getPageRank(elements);
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
        'font-weight': 'bold',
        'text-transform': 'capitalize',

        'outline-color': graph.nodeColor,
        'outline-width': 10,
        'outline-opacity': 0.5,
      },
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
    {
      selector: '#user',
      style: {
        backgroundImage: logoImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#team',
      style: {
        backgroundImage: teamLogoImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#REACT',
      style: {
        backgroundImage: reactImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#NESTJS',
      style: {
        backgroundImage: nestjsImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#REDIS',
      style: {
        backgroundImage: redisImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#jotai',
      style: {
        backgroundImage: jotaiImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#ZUSTAND',
      style: {
        backgroundImage: zustandImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#RECOIL',
      style: {
        backgroundImage: recoilImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#CYTOSCAPEJS',
      style: {
        backgroundImage: cytoscapejsImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#DOCKER',
      style: {
        backgroundImage: dockerImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#NGINX',
      style: {
        backgroundImage: nginxImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#TAILWIND',
      style: {
        backgroundImage: tailwindImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#TYPESCRIPT',
      style: {
        backgroundImage: typescriptImage,
        backgroundFit: 'cover',
      },
    },
    {
      selector: '#TYPEORM',
      style: {
        backgroundImage: typeormImage,
        backgroundFit: 'cover',
      },
    },
  ];
}
