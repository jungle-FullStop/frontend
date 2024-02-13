import NavBar from '@/components/Common/NavBar';
import MultipleItems from '@/components/Board/Slider';

export const Board = () => {


  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="h-2/3 flex items-center">
          <MultipleItems/>
      </div>
    </div>
  );
};
