import { ElementDefinition } from 'cytoscape';

export const dummyMindmap: ElementDefinition[] = [
  {
    data: { id: 'user', label: '검색 결과가 없습니다', cnt: 0 },
  },
  {
    data: { id: 'team', label: '검색을 통해 마인드맵을 만들어보세요', cnt: 0 },
  },
  {
    data: { source: 'team', target: 'user' },
  },
];
