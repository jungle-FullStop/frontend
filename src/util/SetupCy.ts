import Cytoscape, { use as cytoscapeUse } from 'cytoscape';

import fcose from 'cytoscape-fcose';
import popper from 'cytoscape-popper';
import cxtmenu from 'cytoscape-cxtmenu';
export default function () {
  cytoscapeUse(fcose);
  if (typeof Cytoscape('core', 'popper') == 'undefined') {
    Cytoscape.use(popper);
  }
  if (typeof Cytoscape('core', 'cxtmenu') == 'undefined') {
    Cytoscape.use(cxtmenu);
  }
}
