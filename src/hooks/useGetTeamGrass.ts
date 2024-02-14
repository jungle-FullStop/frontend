import { useEffect, useState } from 'react';
import { TIL } from '@type/TIL.ts';
import { dateRange, daysInCurrentMonth } from '@util/Constants/dateConstants.ts';
import { getTeamGrass } from '@api/GrassApi.ts';

const today = new Date();

export const useGetTeamGrass = () => {
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
    const numberOfZeros = dateRange.filter((value) => value === '0').length;

    try {
      const response = await getTeamGrass(today);
      console.log(response);
      const teamBoard = response[0].teamBoard;
      console.log(teamBoard);
      const totalMember = response[0].totalMember;
      console.log(totalMember);
      const newTILData = [...TilData];
      // 팀원이
      for (let teamUser = 0; teamUser < teamBoard.length; teamUser++) {
        // 작성한 글 중에
        for (let i = 0; i < teamBoard[teamUser].boards.length; i++) {
          const currentBoard = teamBoard[teamUser];
          const wirteDate = new Date(currentBoard.boards[i].timestamp);
          const writeId = currentBoard.boards[i].id;
          // 특정 날짜가 있는지 확인
          for (let j = 0; j < daysInCurrentMonth.length; j++) {
            // 작성한 글이 있으면
            if (
              wirteDate.getFullYear() == daysInCurrentMonth[j].getFullYear() &&
              wirteDate.getMonth() == daysInCurrentMonth[j].getMonth() &&
              wirteDate.getDate() == daysInCurrentMonth[j].getDate()
            ) {
              newTILData[j + numberOfZeros].id = writeId;
              newTILData[j + numberOfZeros].count += 1;

              // 다음 글로 넘어가기
              break;
            }
          }
        }
      }
      newTILData.map((Til) => {
        Til.count = Math.floor((Til.count / totalMember) * 100);
        return Til;
      });
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
