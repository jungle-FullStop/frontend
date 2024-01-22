import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import { dummyElements } from '@type/components/Graph/dummyElements';
import { generateStylesheet, getPageRank } from '@/hooks/Graph/useGraphStylesheet';
import { layouts } from '@/types/components/Graph/graphLayouts';
import setupCy from '@util/SetupCy';
import { setDimStyle, setFocus, setResetFocus } from '@/hooks/Graph/useGraphFunc';

setupCy();

const Graph = () => {
  const [elements, setElements] = useState(dummyElements);
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
