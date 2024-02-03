import { dummyMindmap } from '@/types/components/Mindmap/dummyMindmap';
import { ElementDefinition } from 'cytoscape';

export function generateMindmap() {
  let elements: ElementDefinition[];
  const mindmap = localStorage.getItem('todayMindmap') || dummyMindmap;
  if (typeof mindmap === 'string') {
    const preprocessed = JSON.parse(mindmap);
    elements = [...preprocessed.nodes, ...preprocessed.edges];
    if (elements.length === 0) {
      elements = dummyMindmap;
    }
    return elements;
  }
  return mindmap;
}
