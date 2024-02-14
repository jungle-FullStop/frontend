import NavBar from '@/components/Common/NavBar';
import SliderCard from '@/components/Board/Slider';
import { Footer } from '@/components/Common/Footer';

export const Board = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="mx-auto flex h-screen w-full items-center">
        <SliderCard />
      </div>
      <Footer />
    </div>
  );
};
