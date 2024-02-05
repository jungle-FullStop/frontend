import { useRecoilState } from 'recoil';
import { todayState, todayTILState } from '@store/Store.ts';
import { useEffect, useState } from 'react';
import { TIL } from '@type/TIL.ts';
import { dateRange, daysInCurrentMonth } from '@util/Constants/dateConstants.ts';
import { getUserGrass } from '@api/GrassApi.ts';

const today = new Date();

export const useGetUserGrass = () => {
  const [, setTodayWrite] = useRecoilState(todayState);
  const [, setTodayTILPage] = useRecoilState(todayTILState);

  const [TilData, setTilDta] = useState<TIL[]>(() => {
    return dateRange.map((item) => {
      return {
        date: item,
        id: -1,
        count: 0,
      };
    });
  });

  const getData = async () => {
    const userId = localStorage.getItem('userId');
    const numberOfZeros = dateRange.filter((value) => value === '0').length;

    try {
      const response = await getUserGrass(Number(userId), today);
      const currentDate = new Date();
      const newTILData = [...TilData];
      // 작성한 글 중에
      for (let i = 0; i < response.boards.length; i++) {
        const wirteDate = new Date(response.boards[i].timestamp);
        const writeId = response.boards[i].id;
        // 특정 날짜가 있는지 확인
        for (let j = 0; j < daysInCurrentMonth.length; j++) {
          // 작성한 글이 있으면
          if (
            wirteDate.getFullYear() == daysInCurrentMonth[j].getFullYear() &&
            wirteDate.getMonth() == daysInCurrentMonth[j].getMonth() &&
            wirteDate.getDate() == daysInCurrentMonth[j].getDate()
          ) {
            // 오늘 작성한 글이면
            if (
              wirteDate.getFullYear() == currentDate.getFullYear() &&
              wirteDate.getMonth() == currentDate.getMonth() &&
              wirteDate.getDate() == currentDate.getDate()
            ) {
              setTodayWrite(true);
              setTodayTILPage(writeId);
            }
            // 그 날짜에 잔디 심기
            newTILData[j + numberOfZeros].id = writeId;
            newTILData[j + numberOfZeros].count += 1;

            // 다음 글로 넘어가기
            break;
          }
        }
      }
      setTilDta(newTILData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return TilData;
};
