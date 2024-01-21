import NavBar from '@components/Common/NavBar';
import LoadingCircle from '@/components/Loading/LoadingCircle';
import ProgressBar from '@components/Loading/ProgressBar';
import Graph from '@components/Common/Graph';

const Loading = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <NavBar />
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex items-center gap-x-10">
          <ProgressBar />
          <div className="flex flex-col">
            <LoadingCircle />
            <p className="text-lg font-bold">Loading...</p>
          </div>
        </div>
        <Graph />
      </div>
    </div>
  );
};

export default Loading;
