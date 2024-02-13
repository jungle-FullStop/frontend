import NavBar from '@/components/Common/NavBar';
import SliderCard from '@/components/Board/Slider';
import { Footer } from '@/components/Common/Footer';

export const Board = () => {
  return (
    <>
      <div className="main-container">
        <NavBar></NavBar>
        <div className="flex h-full items-center">
          <SliderCard />
        </div>
      <Footer></Footer>
      </div>
    </>
  );
};
