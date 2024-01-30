import API_PATH from '@/util/apiPath';
import axios from 'axios';
import { useState, useRef } from 'react';

export const Grass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const grassDiv = useRef<HTMLDivElement>(null);
  const tooltipDiv = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const grassNode = grassDiv.current;
  //   console.log(grassNode);
  //   const tooltipNode = tooltipDiv.current;
  //   console.log(tooltipDiv)
  //   if (grassNode && tooltipNode) {
  //     const rect = grassNode.getBoundingClientRect();
  //     console.log(rect)
  //     tooltipNode.style.left = `${-330+rect.left}px`;
  //   }
  // }, [showToolTip]);

  function formatDate(dateString: string): string | null {
    const parts = dateString.split('. ');

    if (parts.length !== 4) {
      return null; // 주어진 문자열의 형식이 잘못되었을 경우 null 반환
    }

    const year = parts[0];
    const month = parts[1].padStart(2, '0'); // 월을 두 자리 숫자로 변환
    const day = parts[2].padStart(2, '0'); // 일을 두 자리 숫자로 변환

    return `${year}-${month}-${day}`;
  }

  const handleGrassDivClick = async () => {
    const userId = localStorage.getItem('userId');
    const date = formatDate(props.date);
    // 클릭 이벤트 핸들러 함수
    try {
      const response = await axios.get(`${API_PATH.BOARD.find()}/${userId}/${date}`);
      // 서버로부터 받은 데이터를 처리하는 코드
      console.log(response.data); // 서버에서 받은 데이터 출력
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div
      ref={grassDiv}
      className="flex cursor-pointer whitespace-pre"
      onClick={handleGrassDivClick}
      onMouseEnter={() => {
        setShowToolTip(true);
      }}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div
        className={`m-[0.2rem] h-5 w-5 flex-grow rounded ${props.date !== '0' ? (props.i == 23 ? 'bg-light-green-400' : 'bg-gray-300') : 'bg-white'}`}
      ></div>
      {showToolTip && props.date !== '0' && (
        <div
          ref={tooltipDiv}
          className="bg-default absolute -translate-x-3/4 -translate-y-full  rounded bg-yellow-100 p-2  opacity-70"
        >
          {props.i == 23 ? (
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
