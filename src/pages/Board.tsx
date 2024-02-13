import NavBar from '@/components/Common/NavBar';
import SliderCard from '@/components/Board/Slider';
import { Footer } from '@/components/Common/Footer';

export const Board = () => {
  return (
    <>
      <div className="main-container">
        <NavBar></NavBar>
        <div className="flex w-full h-full mx-auto items-center">
          <SliderCard />
        </div>
      <Footer></Footer>
      </div>
    </>
  );
};
