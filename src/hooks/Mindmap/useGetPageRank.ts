import cytoscape, { SearchPageRankOptions, SearchPageRankResult } from 'cytoscape';

export function getPageRank(elements: any): SearchPageRankResult {
  const cy_for_rank = cytoscape({
    elements: elements,
  });

  const pageOpt: SearchPageRankOptions = {};
  return cy_for_rank.elements().pageRank(pageOpt);
}
