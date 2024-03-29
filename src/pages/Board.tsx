import NavBar from '@/components/Common/NavBar';
import SliderCard from '@/components/Board/Slider';
import { Footer } from '@/components/Common/Footer';
import Modal from '@components/Common/Modal.tsx';

export const Board = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="mx-auto">
        <SliderCard />
      </div>
        <Footer />
        <Modal />
    </div>
  );
};
