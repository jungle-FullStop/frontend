import API_PATH from '@util/apiPath.ts';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TeamGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const [isWrite, setIsWrite] = useState(false);

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
