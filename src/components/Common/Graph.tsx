import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import { generateStylesheet, getPageRank } from '@/hooks/Graph/useGraphStylesheet';
import { layouts } from '@/types/components/Graph/graphLayouts';
import setupCy from '@util/SetupCy';
import { setDimStyle, setFocus, setResetFocus } from '@/hooks/Graph/useGraphFunc';
import { dummyMindmap } from '@/types/components/Graph/dummyMindmap';

setupCy();

const Graph = () => {
  let resizeTimer: number;
  const [elements, setElements] = useState(dummyMindmap);
  const [layout, setLayout] = useState(layouts.fcose);
  const [stylesheet, setStylesheet] = useState<Stylesheet[]>(
    generateStylesheet(getPageRank(elements)),
  );

  return (
    <CytoscapeComponent
      cy={(cy) => {
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
        height: '500px',
        border: '1px solid black',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
      }}
      layout={layout}
      stylesheet={stylesheet}
      wheelSensitivity={0.1}
    />
  );
};

export default Graph;
