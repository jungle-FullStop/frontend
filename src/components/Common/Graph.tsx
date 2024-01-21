import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import { generateNode } from '@/hooks/useGenerateNode';
import { generateStylesheet } from '@/hooks/useGenerateStylesheet';
import { layouts } from '@type/components/Graph/layouts';

const Graph = () => {
  const [elements, setElements] = useState(() => generateNode(5));
  const [layout, setLayout] = useState(layouts.circle);
  const [stylesheet, setStylesheet] = useState<Stylesheet[]>(generateStylesheet);

  return (
    <CytoscapeComponent
      id="cy"
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
