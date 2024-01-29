import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import setupCy from '@util/SetupCy';
import { generateStylesheet, getPageRank } from '@/hooks/Mindmap/useMindmapStylesheet';
import { setDimStyle, setFocus, setResetFocus } from '@/hooks/Mindmap/useMindmapFunc';
import { generateMindmap } from '@/hooks/Mindmap/useMindmapGenerate';
import { nodePopper } from '@components/Mindmap/NodePopper.tsx';
import { edgePopper } from '@components/Mindmap/EdgePopper.tsx';
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
