import NavBar from '@/components/Common/NavBar';
import MultipleItems from '@/components/Board/Slider';
import { Footer } from '@/components/Common/Footer';

export const Board = () => {
  return (
    <>
      <div className="main-container">
        <NavBar></NavBar>
        <div className="flex h-full items-center">
          <MultipleItems />
        </div>
      <Footer></Footer>
      </div>
    </>
  );
};
