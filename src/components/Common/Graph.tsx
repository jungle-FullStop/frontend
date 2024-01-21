import { useEffect, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { generateGraph } from '@hooks/useGenerateGraph';
import { layouts } from '@type/components/Graph/layouts';

const Graph = () => {
  const [elements, setElements] = useState(() => generateGraph(5));
  const [layout, setLayout] = useState(layouts.circle);
  return (
    <CytoscapeComponent
      elements={elements}
      style={{
        width: '100%',
        height: '500px',
        border: '1px solid black',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
      }}
      layout={layout}
      wheelSensitivity={0.1}
    />
  );
};

export default Graph;
