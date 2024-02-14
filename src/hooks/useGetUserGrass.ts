import { useRecoilState } from 'recoil';
import { todayState } from '@store/Store.ts';
import { useEffect, useState } from 'react';
import { TIL } from '@type/TIL.ts';
import { dateRange, daysInCurrentMonth } from '@util/Constants/dateConstants.ts';
import { getUserGrass } from '@api/GrassApi.ts';

const today = new Date();

export const useGetUserGrass = () => {
  const [, setTodayWrite] = useRecoilState(todayState);

  const [TilData, setTilData] = useState<TIL[]>(() => {
    return dateRange.map((item) => {
      return {
        date: item,
        id: -1,
        count: 0,
        proportion: 0,
      };
    });
  });

  const getData = async () => {
    const numberOfZeros = dateRange.filter((value) => value === '0').length;

    try {
      const response = await getUserGrass(today);
      const currentDate = new Date();
      const newTILData = [...TilData];
      // 작성한 글 중에
      for (let i = 0; i < response.boards.length; i++) {
        const writeDate = new Date(response.boards[i].timestamp);
        const writeId = response.boards[i].id;
        // 특정 날짜가 있는지 확인
        for (let j = 0; j < daysInCurrentMonth.length; j++) {
          // 작성한 글이 있으면
          if (
            writeDate.getFullYear() == daysInCurrentMonth[j].getFullYear() &&
            writeDate.getMonth() == daysInCurrentMonth[j].getMonth() &&
            writeDate.getDate() == daysInCurrentMonth[j].getDate()
          ) {
            // 오늘 작성한 글이면
            if (
              writeDate.getFullYear() == currentDate.getFullYear() &&
              writeDate.getMonth() == currentDate.getMonth() &&
              writeDate.getDate() == currentDate.getDate()
            ) {
              setTodayWrite(true);
            }
            // 그 날짜에 잔디 심기
            newTILData[j + numberOfZeros].id = writeId;
            newTILData[j + numberOfZeros].count += 1;

            // 다음 글로 넘어가기
            break;
          }
        }
      }
      setTilData(newTILData);
      // console.log(TilData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return TilData;
};
