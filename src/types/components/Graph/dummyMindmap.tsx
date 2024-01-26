import { ElementDefinition } from 'cytoscape';

export const dummyMindmap: ElementDefinition[] = [
  {
    data: { id: 'NESTJS', label: 'NESTJS' },
  },
  {
    data: { id: 'REDIS', label: 'REDIS' },
  },
  {
    data: { id: '레디스', label: '레디스' },
  },
  {
    data: { source: 'REDIS', target: '레디스' },
  },
  {
    data: { source: 'NESTJS', target: 'REDIS' },
  },
  {
    data: { source: 'REDIS', target: '레디스' },
  },
];
