import { use as cytoscapeUse } from 'cytoscape';

// @ts-ignore
import fcose from 'cytoscape-fcose';

export default function () {
  cytoscapeUse(fcose);
}
