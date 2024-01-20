import NavBar from '@components/Common/NavBar';
import Editor from '@components/Edit/Editor';
import Header from '@/components/Edit/Header';

const Edit = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <NavBar />
      <Header />
      <Editor />
    </div>
  );
};

export default Edit;
