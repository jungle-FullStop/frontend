import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import { dummyElements } from '@type/components/Graph/dummyElements';
import { generateStylesheet } from '@/hooks/Graph/useGenerateStylesheet';
import { layouts } from '@type/components/Graph/layouts';
import setupCy from '@util/SetupCy';

setupCy();

const Graph = () => {
  const navigate = useNavigate();
  const [elements, setElements] = useState(dummyElements);
  const [layout, setLayout] = useState(layouts.fcose);
  const [stylesheet, setStylesheet] = useState<Stylesheet[]>(generateStylesheet());

  return (
    <CytoscapeComponent
      cy={(cy): void => {
        cy.on('select', (e: any) => {
          const url = e.target.data('url');
          if (url && url !== '') {
            window.open(url);
          }
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
