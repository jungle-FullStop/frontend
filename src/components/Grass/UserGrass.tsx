import API_PATH from '@util/apiPath.ts';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todayState, todayTILState } from '@store/Store.ts';

export const UserGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const navigate = useNavigate();

  // function formatDate(dateString: string): string | null {
  //   const parts = dateString.split('. ');

  //   if (parts.length !== 4) {
  //     return null; // 주어진 문자열의 형식이 잘못되었을 경우 null 반환
  //   }

  //   const year = parts[0];
  //   const month = parts[1].padStart(2, '0'); // 월을 두 자리 숫자로 변환
  //   const day = parts[2].padStart(2, '0'); // 일을 두 자리 숫자로 변환

  //   return `${year}-${month}-${day}`;
  // }

  // console.log(formatDate(props.date)) ;

  // useEffect(() => {
  //   const getData = async () => {
  //     const userId = localStorage.getItem('userId');
  //     const date = formatDate(props.date);
  //     // 클릭 이벤트 핸들러 함수
  //     try {
  //       if(props.date != '0'){
  //         const response = await axios.get(`${API_PATH.BOARD.find()}/${userId}/${date}`);
  //         // 서버로부터 받은 데이터를 처리하는 코드
  //         const timeStamp = response.data.timestamp;
  //         if (new Date(timeStamp).toString() != 'Invalid Date') {
  //           if (currentDate.getDate() == new Date(timeStamp).getDate()) {
  //             setTodayWrite(true);
  //           }
  //           setIsWrite(true);
  //           setPage(response.data.id);
  //           setTodayTILPage(response.data.id);
  //           console.log(`${props.date} TIL 작성`)
  //         }
  //       } 
  //       }
  //     catch (error) {
  //        console.error('Error fetching data:', error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div
      className="flex cursor-pointer whitespace-pre"
      onMouseEnter={() => {
        setShowToolTip(true);
      }}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div
        className={`m-[0.2rem] h-5 w-5 flex-grow rounded ${props.date !== '0' ? (props.write ? 'bg-light-green-400' : 'bg-gray-300') : 'bg-white'}`}
        onClick={() => {
          if (props.write) {
            navigate(`/board/${props.pageId}`);
          }
        }}
      ></div>
      {showToolTip && props.date !== '0' && (
        <div className="bg-default absolute -translate-x-3/4 -translate-y-full  rounded bg-yellow-100 p-2  opacity-70">
          {props.write ? (
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
