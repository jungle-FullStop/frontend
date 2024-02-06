import NavBar from '@components/Common/NavBar';
import Editor from '@components/Edit/Editor';
import History from '@components/History/History.tsx';

const Edit = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="w-[90%] mx-auto">
        <div className="flex flex-row gap-x-3">
          <div className="contents-container">
            <History />
          </div>
          <div className="contents-container">
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
