import { dummyMindmap } from '@/types/components/Mindmap/dummyMindmap';
import { ElementDefinition } from 'cytoscape';

export function generateMindmap() {
  let elements: ElementDefinition[];
  const mindmap = localStorage.getItem('todayMindmap');
  if (mindmap === null || mindmap === '') {
    elements = dummyMindmap;
  } else {
    const preprocessed = JSON.parse(mindmap);
    elements = [...preprocessed.nodes, ...preprocessed.edges];
  }

  return elements;
}
