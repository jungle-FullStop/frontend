import { ElementDefinition } from 'cytoscape';

export const dummyElements: ElementDefinition[] = [
  {
    data: {
      id: 'PJ-mindMap',
      url: 'https://changjohwang.tistory.com/',
      label: 'Project Driven Study Map',
    },
  },
  {
    data: {
      id: 'ISSUE-packageJson',
      url: 'https://changjohwang.tistory.com/1',
      label: 'package.json 에러',
    },
  },
  {
    data: {
      id: 'PJ-mindMap->ISSUE-packageJson',
      source: 'ISSUE-packageJson',
      target: 'PJ-mindMap',
    },
  },
  {
    data: {
      id: 'STUDY-npmInit',
      url: 'https://changjohwang.tistory.com/3',
      label: 'npm 패키지 설치 순서 숙지',
    },
  },
  {
    data: {
      id: 'ISSUE-packageJson->STUDY-npmInit',
      source: 'STUDY-npmInit',
      target: 'ISSUE-packageJson',
    },
  },
  {
    data: {
      id: 'ISSUE-outsideModule',
      url: 'https://changjohwang.tistory.com/4',
      label: 'script module 에러',
    },
  },
  {
    data: {
      id: 'PJ-mindmap->ISSUE-outsideModule',
      source: 'ISSUE-outsideModule',
      target: 'PJ-mindMap',
    },
  },
  {
    data: {
      id: 'STUDY-scriptModule',
      url: 'https://changjohwang.tistory.com/5',
      label: 'js module 학습',
    },
  },
  {
    data: {
      id: 'ISSUE-outsideModule->STUDY-scriptModule',
      source: 'STUDY-scriptModule',
      target: 'ISSUE-outsideModule',
    },
  },
  {
    data: {
      id: 'STUDY-scriptPosition',
      url: 'https://changjohwang.tistory.com/6',
      label: 'script 태그 위치 학습',
    },
  },
  {
    data: {
      id: 'ISSUE-outsideModule->STUDY-scriptPosition',
      source: 'STUDY-scriptPosition',
      target: 'ISSUE-outsideModule',
    },
  },
  {
    data: {
      id: 'ISSUE-localCORS',
      url: 'https://changjohwang.tistory.com/7',
      label: 'local 실행시 CORS 에러',
    },
  },
  {
    data: { id: 'PJ-mindmap->ISSUE-localCORS', source: 'ISSUE-localCORS', target: 'PJ-mindMap' },
  },
  {
    data: {
      id: 'STUDY-localCORS',
      url: 'https://changjohwang.tistory.com/8',
      label: 'CORS & SOP 학습',
    },
  },
  {
    data: {
      id: 'ISSUE-localCORS->STUDY-localCORS',
      source: 'STUDY-localCORS',
      target: 'ISSUE-localCORS',
    },
  },
  {
    data: {
      id: 'ISSUE-moduleImport',
      url: 'https://changjohwang.tistory.com/9',
      label: 'module import 경로 에러',
    },
  },
  {
    data: {
      id: 'PJ-mindmap->ISSUE-moduleImport',
      source: 'ISSUE-moduleImport',
      target: 'PJ-mindMap',
    },
  },
  {
    data: {
      id: 'STUDY-webpackBuild',
      url: 'https://changjohwang.tistory.com/10',
      label: 'webpack build 실습',
    },
  },
  {
    data: {
      id: 'ISSUE-moduleImport->STUDY-webpackBuild',
      source: 'STUDY-webpackBuild',
      target: 'ISSUE-moduleImport',
    },
  },
  {
    data: {
      id: 'STUDY-jsBrowser',
      url: 'https://changjohwang.tistory.com/11',
      label: 'js 엔진과 runtime 학습',
    },
  },
  {
    data: {
      id: 'STUDY-webpackBuild->STUDY-jsBrowser',
      source: 'STUDY-jsBrowser',
      target: 'STUDY-webpackBuild',
    },
  },
  {
    data: {
      id: 'React',
      url: 'https://changjohwang.tistory.com/11',
      label: 'React',
    },
  },
  {
    data: {
      id: 'Redux',
      url: 'https://changjohwang.tistory.com/11',
      label: 'Redux',
    },
  },
  {
    data: {
      id: 'PJ-mindMap->React',
      source: 'React',
      target: 'PJ-mindMap',
    },
  },
  {
    data: {
      id: 'React->Redux',
      source: 'Redux',
      target: 'React',
    },
  },
];
