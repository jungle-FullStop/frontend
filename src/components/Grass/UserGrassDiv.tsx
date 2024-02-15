import { UserGrass } from '@components/Grass/UserGrass.tsx';
import { useGetUserGrass } from '@hooks/useGetUserGrass.ts';
import { useState } from 'react';

export const UserGrassDiv = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date()); // 현재 월 상태 변수

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newDate = new Date(prevMonth);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newDate = new Date(prevMonth);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const TilData = useGetUserGrass(currentMonth);
  // const tilScore = localStorage.getItem('tilScore');
  const tilScore = TilData.reduce((acc, cur) => acc + cur.count, 0);

  const grassElements = TilData.map((data, i) => {
    return <UserGrass date={data.date} count={data.count} pageId={data.id} key={i} iter={i} />;
  });

  return (
    <div className="container mx-auto">
      <div className="mb-4 text-center">
        <button onClick={goToPreviousMonth} className="mr-4">
          이전 달
        </button>
        <p className="inline-block text-2xl text-black">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </p>
        <button onClick={goToNextMonth} className="ml-4">
          다음 달
        </button>
      </div>
      <div className="grass-container">
        <div>
          <p className="TILFont pb-3  text-center text-2xl text-black">
            나의 <span className="text-yellow-800">TIL</span> 텃밭
          </p>
          <div className="grassFont mx-auto grid w-[700px] grid-cols-7 grid-rows-1 p-2 text-center text-xl font-bold text-black">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
          </div>
          <div className="mx-auto grid h-[500px] w-[700px] grid-cols-7 grid-rows-5 rounded-lg bg-grassColor p-2">
            {grassElements}
          </div>
        </div>
        <p className="ml-auto mr-[30px] mt-3 text-xl font-bold text-gray-600">
          이번 달 {tilScore}개의 TIL가 작성되었습니다 !
        </p>
      </div>
    </div>
  );
};
