import { useEffect, useState } from 'react';
import { TIL } from '@type/TIL.ts';
import { dateRange, daysInCurrentMonth } from '@util/Constants/dateConstants.ts';
import { getTeamGrass } from '@api/GrassApi.ts';

const today = new Date();

export const useGetTeamGrass = () => {
  const [TilData, setTilData] = useState<TIL[]>(() => {
    return dateRange.map((item): TIL => {
      return {
        date: item,
        id: -1,
        count: 0,
        proportion: 0,
        sse: false,
      };
    });
  });

  const getData = async () => {
    const numberOfZeros = dateRange.filter((value) => value === '0').length;

    try {
      const response = await getTeamGrass(today);
      const teamBoard = response.teamBoard;
      // console.log(teamBoard);
      const totalMember = response.totalMember;
      // console.log(totalMember);
      const newTILData = [...TilData];
      // 팀원이
      for (let teamUser = 0; teamUser < teamBoard.length; teamUser++) {
        // 작성한 글 중에
        for (let i = 0; i < teamBoard[teamUser].boards.length; i++) {
          const currentBoard = teamBoard[teamUser];
          const writeDate = new Date(currentBoard.boards[i].timestamp);
          const writeId = currentBoard.boards[i].id;
          // 특정 날짜가 있는지 확인
          for (let j = 0; j < daysInCurrentMonth.length; j++) {
            // 작성한 글이 있으면
            if (
              writeDate.getFullYear() == daysInCurrentMonth[j].getFullYear() &&
              writeDate.getMonth() == daysInCurrentMonth[j].getMonth() &&
              writeDate.getDate() == daysInCurrentMonth[j].getDate()
            ) {
              newTILData[j + numberOfZeros].id = writeId;
              newTILData[j + numberOfZeros].count += 1;
              // newTILData[j + numberOfZeros].proportion += 1;

              // 다음 글로 넘어가기
              break;
            }
          }
        }
      }
      newTILData.map((Til) => {
        Til.proportion = Math.floor((Til.count / totalMember) * 100);
        return Til;
      });
      setTilData(newTILData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return TilData;
};
