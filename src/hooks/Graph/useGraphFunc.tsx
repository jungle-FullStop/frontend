import {
  CollectionReturnValue,
  NodeCollection,
  SearchPageRankResult,
  SingularElementReturnValue,
} from 'cytoscape';
import * as graph from '@hooks/Graph/graphConstants';

const dimColor = '#dfe4ea';
const DimStyle = {
  'background-color': dimColor,
  'line-color': dimColor,
  'source-arrow-color': dimColor,
  color: dimColor,
};

// cytoscape 관련 함수
export function setDimStyle(target_cy: NodeCollection) {
  target_cy.nodes().forEach(function (target) {
    target.style(DimStyle);
  });
  target_cy.edges().forEach(function (target) {
    target.style(DimStyle);
  });
}

export function setFocus(target_element: SingularElementReturnValue) {
  target_element.style('background-color', graph.nodeActiveColor);
  target_element.style('color', graph.nodeColor);
  target_element.successors().each(function (e) {
    // 상위  엣지와 노드
    if (e.isEdge()) {
      e.style('width', graph.edgeActiveWidth);
      e.style('arrow-scale', graph.arrowActiveScale);
    }
    e.style('color', graph.nodeColor);
    e.style('background-color', graph.successorColor);
    e.style('line-color', graph.successorColor);
    e.style('source-arrow-color', graph.successorColor);
    setOpacityElement(e, 0.5);
  });
  target_element.predecessors().each(function (e) {
    // 하위 엣지와 노드
    if (e.isEdge()) {
      e.style('width', graph.edgeActiveWidth);
      e.style('arrow-scale', graph.arrowActiveScale);
    }
    e.style('color', graph.nodeColor);
    e.style('background-color', graph.predecessorsColor);
    e.style('line-color', graph.predecessorsColor);
    e.style('source-arrow-color', graph.predecessorsColor);
    setOpacityElement(e, 0.5);
  });
  target_element.neighborhood().each(function (e) {
    // 이웃한 엣지와 노드
    setOpacityElement(e, 0.5);
  });
  target_element.style(
    'width',
    Math.max(parseFloat(target_element.style('width')), graph.nodeActiveSize),
  );
  target_element.style(
    'height',
    Math.max(parseFloat(target_element.style('height')), graph.nodeActiveSize),
  );
  target_element.style(
    'font-size',
    Math.max(parseFloat(target_element.style('font-size')), graph.fontActiveSize),
  );
}

export function setOpacityElement(target_element: any, degree: any) {
  target_element.style('opacity', degree);
}

export function setResetFocus(target_cy: CollectionReturnValue, pageRank: SearchPageRankResult) {
  target_cy.nodes().forEach(function (target) {
    target.style('background-color', graph.nodeColor);
    var rank = pageRank.rank(target);
    target.style('width', graph.nodeMaxSize * rank + graph.nodeMinSize);
    target.style('height', graph.nodeMaxSize * rank + graph.nodeMinSize);
    target.style('font-size', graph.fontMaxSize * rank + graph.fontMinSize);
    target.style('color', graph.nodeColor);
    target.style('opacity', 1);
  });
  target_cy.edges().forEach(function (target) {
    target.style('line-color', graph.edgeColor);
    target.style('source-arrow-color', graph.edgeColor);
    target.style('width', graph.edgeWidth);
    target.style('arrow-scale', graph.arrowScale);
    target.style('opacity', 1);
  });
}
