import NavBar from '@components/Common/NavBar';
import LoadingCircle from '@/components/Loading/LoadingCircle';
import ProgressBar from '@components/Loading/ProgressBar';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <NavBar />
      <div className="flex h-screen w-screen items-center justify-center">
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
