import NavBar from '@components/Common/NavBar';
import LoadingCircle from '@/components/Loading/LoadingCircle';
import ProgressBar from '@components/Loading/ProgressBar';
import CytoscapeComponent from 'react-cytoscapejs';

const elements = [
  { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
  { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
  { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
];

const Loading = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <NavBar />
      <div className="flex justify-center">
        <CytoscapeComponent
          elements={elements}
          style={{
            width: '100%',
            height: '500px',
            border: '1px solid black',
          }}
        />
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <LoadingCircle />
          <p className="text-lg font-bold">Loading...</p>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default Loading;
