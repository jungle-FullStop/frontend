import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer whitespace-pre"
      onMouseEnter={() => {
        setShowToolTip(true);
      }}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div
        className={`m-[0.3rem] h-8 flex-grow rounded ${props.date !== '0' ? (props.write ? 'bg-grass bg-contain' : 'bg-noGrass') : 'bg-grassColor'}`}
        onClick={() => {
          if (props.write) {
            navigate(`/board/${props.pageId}`);
          }
        }}
      ></div>
      {props.write && showToolTip && props.date !== '0' && (
        <div className="bg-default absolute -translate-x-1/2 -translate-y-full rounded bg-yellow-100 p-2 opacity-70">
          <p>
            <strong> Check TIL</strong> on {props.date}
          </p>
        </div>
      )}
    </div>
  );
};
