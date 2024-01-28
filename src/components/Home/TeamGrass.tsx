import { dateRange } from '@/util/Constants/dateConstants';
import { Grass } from '@/components/Common/Grass';
import { Button } from '@material-tailwind/react';

export const TeamGrass = () => {
  const grassElements = dateRange.map((date, i) => {
    return <Grass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container">
      <div>
        <p className="text-center text-lg font-bold sm:text-2xl">Team TIL HISTORY </p>
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
