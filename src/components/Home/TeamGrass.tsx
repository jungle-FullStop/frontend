import { dateRange } from '@/util/Constants/dateConstants';
import { Grass } from '@/components/Common/Grass';

export const TeamGrass = () => {
  let teamName = localStorage.getItem('teamName');
  if (teamName === null || teamName === '') {
    teamName = '정글 3기';
  }

  const grassElements = dateRange.map((date, i) => {
    return <Grass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container">
      <div>
        <p className="text-center text-lg font-bold sm:text-2xl">{teamName} 잔디밭 </p>
        <div className="mx-auto grid w-80 grid-cols-7 grid-rows-1 p-2 text-center">
          <p>Sun</p>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
        </div>
        <div className="border-brown mx-auto grid w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2 ">
          {grassElements}
        </div>
      </div>
    </div>
  );
};
