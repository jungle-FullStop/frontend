import NavBar from '@components/Common/NavBar';
import Editor from '@components/Edit/Editor';
import Header from '@/components/Edit/Header';

const Edit = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="sub-container">
        <div className="contents-container">
          <Header />
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default Edit;
