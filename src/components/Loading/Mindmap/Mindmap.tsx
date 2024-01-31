import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import setupCy from '@util/SetupCy.ts';
import { generateStylesheet, getPageRank } from '@hooks/Mindmap/useMindmapStylesheet.tsx';
import { setDimStyle, setFocus, setResetFocus } from '@hooks/Mindmap/useMindmapFunc.tsx';
import { generateMindmap } from '@hooks/Mindmap/useMindmapGenerate.tsx';
import { nodePopper } from '@components/Loading/Mindmap/NodePopper.tsx';
import { edgePopper } from '@components/Loading/Mindmap/EdgePopper.tsx';
import { layouts } from '@type/components/Mindmap/mindmapLayouts.tsx';

setupCy();

export const Mindmap = (props: any) => {
  let resizeTimer: number;
  const [elements] = useState(() => generateMindmap());
  const layout = layouts[props.name];
  const [stylesheet] = useState<Stylesheet[]>(generateStylesheet(getPageRank(elements)));

  return (
    <CytoscapeComponent
      cy={(cy) => {
        cy.filter('node').forEach((t) => {
          nodePopper(t);
        });

        cy.filter('edge').forEach((t) => {
          edgePopper(t);
        });

        cy.on('select', 'node', function (e) {
          setDimStyle(cy.nodes());
          setFocus(e.target);
        });

        cy.on('unselect', function (e) {
          setResetFocus(e.cy.elements(), getPageRank(elements));
        });

        window.addEventListener('resize', function () {
          this.clearTimeout(resizeTimer);
          resizeTimer = this.setTimeout(function () {
            cy.fit();
          }, 200);
        });
      }}
      elements={elements}
      style={{
        width: '100%',
        height: '100%',
        border: '3px solid black',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
      layout={layout}
      stylesheet={stylesheet}
    />
  );
};
