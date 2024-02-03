import API_PATH from '@util/apiPath.ts';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TeamGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const [isWrite, SetIsWrite] = useState(false);

  return (
    <div
      className="flex cursor-pointer whitespace-pre"
      onMouseEnter={() => {
        setShowToolTip(true);
      }}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div
        className={`m-[0.2rem] h-5 w-5 flex-grow rounded ${props.date !== '0' ? 'bg-gray-300' : 'bg-white'} `}
      ></div>
      {showToolTip && props.date !== '0' && (
        <div className="bg-default absolute -translate-x-3/4 -translate-y-full  rounded bg-yellow-100 p-2  opacity-70">
          {isWrite ? (
            <p>
              <strong> Check TIL</strong> on {props.date}
            </p>
          ) : (
            <p>
              <strong> No TIL</strong> on {props.date}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
