import { useRecoilState } from 'recoil';
import { todayState, todayTILState } from '@store/Store.ts';
import { useEffect, useState } from 'react';
import { TIL } from '@type/TIL.ts';
import { dateRange, daysInCurrentMonth } from '@util/Constants/dateConstants.ts';
import { getUserGrass } from '@api/GrassAPI.ts';

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

  const numberOfZeros = dateRange.filter((value) => value === '0').length;

  const getData = async () => {
    const userId = localStorage.getItem('userId');
    try {
      const response = await getUserGrass(Number(userId));
      const currentDate = new Date();

      const newTILData = [...TilData];
      for (let i = 0; i < response.boards.length; i++) {
        const wirteDate = new Date(response.boards[i].timestamp);
        const writeId = response.boards[i].id;
        for (let j = 0; j < daysInCurrentMonth.length; j++) {
          if (
            wirteDate.getFullYear() == daysInCurrentMonth[j].getFullYear() &&
            wirteDate.getMonth() == daysInCurrentMonth[j].getMonth() &&
            wirteDate.getDate() == daysInCurrentMonth[j].getDate()
          ) {
            if (
              wirteDate.getFullYear() == currentDate.getFullYear() &&
              wirteDate.getMonth() == currentDate.getMonth() &&
              wirteDate.getDate() == currentDate.getDate()
            ) {
              setTodayWrite(true);
              setTodayTILPage(writeId);
            }
            newTILData[j + numberOfZeros].id = writeId;
            newTILData[j + numberOfZeros].count += 1;
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
