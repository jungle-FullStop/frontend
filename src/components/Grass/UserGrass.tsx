import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const navigate = useNavigate();

  const grassType = () => {
    switch (props.count) {
      case 1:
        return 'bg-grass bg-contain';
      default:
        return 'bg-noGrass bg-contain';
    }
  };

  return (
    <div
      className="flex cursor-pointer whitespace-pre  "
      onMouseEnter={() => {
        setShowToolTip(true);
      }}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div
        className={`h-[60px] flex-grow rounded ${props.date !== '0' ? grassType() : 'bg-grassColor'}`}
        onClick={() => {
          if (props.count >= 1) {
            navigate(`/board/${props.pageId}`);
          }
        }}
      ></div>
      {props.count >= 1 && showToolTip && props.date !== '0' && (
        <div className="bg-default absolute -translate-x-1/2 -translate-y-full rounded bg-yellow-100 p-2 opacity-70">
          <p>
            <strong> Check TIL</strong> on {props.date}
          </p>
        </div>
      )}
    </div>
  );
};
