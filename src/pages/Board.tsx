import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@components/Board/CardDefault';
import { useNavigate } from 'react-router-dom';
import { useFindUserBoard } from '@hooks/useFindUserBoard.ts';
import MultipleItems from '@/components/Board/Slider';

export const Board = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="h-2/3 flex items-center">
          <MultipleItems/>
      </div>
    </div>
  );
};
