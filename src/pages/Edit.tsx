import NavBar from '@components/Common/NavBar';
import Editor from '@components/Edit/Editor';
import History from '@components/History/History.tsx';
import { Footer } from '@components/Common/Footer.tsx';
import Modal from '@components/Common/Modal.tsx';

const Edit = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="sub-container">
        <div className="flex flex-row gap-x-3">
          <div className="contents-container">
            <History />
          </div>
          <div className="contents-container">
            <Editor />
          </div>
        </div>
      </div>
      <Footer />
      <Modal />
    </div>
  );
};

export default Edit;
