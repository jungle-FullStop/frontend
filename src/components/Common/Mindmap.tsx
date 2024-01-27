import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import { layouts } from '@/types/components/Mindmap/mindmapLayouts';
import setupCy from '@util/SetupCy';
import { generateStylesheet, getPageRank } from '@/hooks/Mindmap/useMindmapStylesheet';
import { setDimStyle, setFocus, setResetFocus } from '@/hooks/Mindmap/useMindmapFunc';
import { generateMindmap } from '@/hooks/Mindmap/useGenerateMindmap';

setupCy();

const Graph = () => {
  let resizeTimer: number;
  const [elements] = useState(() => generateMindmap());
  const [layout] = useState(layouts.fcose);
  const [stylesheet] = useState<Stylesheet[]>(generateStylesheet(getPageRank(elements)));

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
    />
  );
};

export default Graph;
