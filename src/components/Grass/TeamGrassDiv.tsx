import { TeamGrass } from '@/components/Grass/TeamGrass';
import { useGetTeamGrass } from '@hooks/useGetTeamGrass.ts';
import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

export const TeamGrassDiv = () => {
  const teamName = localStorage.getItem('teamName');
  const [TilData, setTilData] = useState(useGetTeamGrass());

  useEffect(() => {
    const eventSource = new EventSource(`/api/team/grass.status`);

    eventSource.onmessage = (event) => {
      let newGrassData = JSON.parse(event.data);
      newGrassData = newGrassData.data;

      const today = new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'long',
      });
      const todayDataIndex = TilData.findIndex((data) => data.date === today);
      if (todayDataIndex !== -1) {
        const updatedTilData = [...TilData];
        updatedTilData[todayDataIndex].count = newGrassData.grass;
        setTilData(updatedTilData);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []); // TilData나 setTilData가 변경될 때마다 useEffect가 다시 실행되도록

  const grassElements = TilData.map((data, i) => {
    return <TeamGrass date={data.date} count={data.count} pageId={data.id} key={i} iter={i} />;
  });

  return (
    <>
      <p className="mt-10 inline-block text-lg font-bold text-gray-600">
        이번 달 n개의 TIL을 작성하셨습니다 !
      </p>
      <div className="grass-container">
        <div>
          <p className=" grassFont text-center text-2xl ">
            팀 <span className={'text-green-500'}>{teamName}</span> 텃밭
          </p>
          <div className=" grassFont mx-auto mb-4 grid w-[450px] grid-cols-7 grid-rows-1 p-2 text-center text-xl font-bold">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
          </div>
          <div className="mx-auto grid h-[300px] w-[450px] grid-cols-7 grid-rows-5 rounded-lg bg-grassColor  p-2">
            {grassElements}
          </div>
        </div>
      </div>
    </>
  );
};
