import { useEffect, useRef, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Stylesheet } from 'cytoscape';
import setupCy from '@util/SetupCy.ts';
import { generateStylesheet } from '@hooks/Mindmap/useMindmapStylesheet.tsx';
import { setDimStyle, setFocus, setResetFocus } from '@hooks/Mindmap/useMindmapFunc.tsx';
import { generateMindmap } from '@hooks/Mindmap/useGenerateMindmap.tsx';
import { nodePopper } from '@components/Loading/Mindmap/NodePopper.tsx';
import { edgePopper } from '@components/Loading/Mindmap/EdgePopper.tsx';
import { layouts } from '@type/components/Mindmap/mindmapLayouts.tsx';
import { useContextMenuOptions } from '@hooks/Mindmap/useContextMenuOptions.ts';
import { getPageRank } from '@hooks/Mindmap/useGetPageRank.ts';

setupCy();

export const Mindmap = (props: any) => {
  // let resizeTimer: number;
  const [elements] = useState(() => generateMindmap());
  const layout = layouts[props.name];
  const [stylesheet] = useState<Stylesheet[]>(generateStylesheet(elements));
  const cyRef = useRef<cytoscape.Core | null>(null);
  const { contextMenuOptions } = useContextMenuOptions();

  useEffect(() => {
    cyRef.current?.cxtmenu(contextMenuOptions);

    cyRef.current?.filter('node').forEach((t) => {
      nodePopper(t);
    });

    cyRef.current?.filter('edge').forEach((t) => {
      edgePopper(t);
    });

    cyRef.current?.on('select', 'node', function (e) {
      setDimStyle(cyRef.current?.elements());
      setFocus(e.target);
    });

    cyRef.current?.on('unselect', function (e) {
      setResetFocus(e.cy.elements(), getPageRank(elements));
    });
  }, []);

  return (
    <CytoscapeComponent
      cy={(cy) => {
        if (!cyRef.current) {
          cyRef.current = cy;
        }
        // window.addEventListener('resize', function () {
        //   this.clearTimeout(resizeTimer);
        //   resizeTimer = this.setTimeout(function () {
        //     cy.fit();
        //   }, 200);
        // });
      }}
      elements={elements}
      style={{
        width: '90%',
        height: '100%',
        // border: '3px solid black',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        margin: '0 auto',
        marginTop: '20px',
      }}
      layout={layout}
      stylesheet={stylesheet}
      pan={{ x: 900, y: 300 }}
    />
  );
};
