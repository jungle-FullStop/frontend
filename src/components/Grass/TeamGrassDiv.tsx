import { dateRange } from '@util/Constants/dateConstants.ts';
import { TeamGrass } from '@/components/Grass/TeamGrass';

export const TeamGrassDiv = () => {
  const teamName = localStorage.getItem('teamName');

  const grassElements = dateRange.map((date, i) => {
    return <TeamGrass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container">
      <div>
        <p className="text-center text-lg font-bold sm:text-2xl">
          팀 <span className={'text-green-500'}>{teamName}</span> 잔디밭
        </p>
        <div className="mx-auto grid w-80 grid-cols-7 grid-rows-1 p-2 text-center">
          <p>Sun</p>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
        </div>
        <div className="border-brown bg-grassColor mx-auto grid w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2 ">
          {grassElements}
        </div>
      </div>
    </div>
  );
};
