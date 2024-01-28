import Cytoscape, { use as cytoscapeUse } from 'cytoscape';

import fcose from 'cytoscape-fcose';
import popper from 'cytoscape-popper';

export default function () {
  cytoscapeUse(fcose);
  if (typeof Cytoscape('core', 'popper') == 'undefined') {
    Cytoscape.use(popper);
  }
}
