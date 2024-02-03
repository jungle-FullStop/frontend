import { ElementDefinition } from 'cytoscape';

export const dummyMindmap: ElementDefinition[] = [
  {
    data: { id: 'NESTJS', label: 'NESTJS' },
  },
  {
    data: { id: 'REDIS', label: 'REDIS' },
  },
  {
    data: { id: 'NoSearch', label: '검색 결과가 없습니다' },
  },
  {
    data: { id: 'Example', label: '이 마인드맵은 예시입니다' },
  },
  {
    data: { source: 'REDIS', target: 'NESTJS' },
  },
  {
    data: { source: 'NoSearch', target: 'Example' },
  },
  {
    data: { source: 'Example', target: 'NoSearch' },
  },
  {
    data: { source: 'NoSearch', target: 'Example' },
  },
  {
    data: { source: 'Example', target: 'NoSearch' },
  },
];
