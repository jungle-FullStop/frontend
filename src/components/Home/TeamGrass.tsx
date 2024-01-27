import { dateRange } from '@/util/Constants/dateConstants';
import { Grass } from '@/components/Home/Grass';
import { Button } from '@material-tailwind/react';

export const TeamGrass = () => {
  const grassElements = dateRange.map((date, i) => {
    return <Grass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container card-back">
      <div>
        <p className="text-center text-lg font-bold sm:text-2xl">Team TIL HISTORY </p>
        <div className="grid w-80 grid-cols-7 grid-rows-1 p-2 text-center mx-auto">
          <p>Sun</p>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
        </div>
        <div className="border-brown grid w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2 mx-auto ">
          {grassElements}
        </div>
      </div>
    </div>
  );
};
