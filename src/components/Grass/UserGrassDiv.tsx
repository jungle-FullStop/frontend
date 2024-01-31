import { dateRange } from '@util/Constants/dateConstants.ts';
import { UserGrass } from '@components/Grass/UserGrass.tsx';

export const UserGrassDiv = () => {
  const grassElements = dateRange.map((date, i) => {
    return <UserGrass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container">
      <div>
        <p className="text-center text-2xl font-bold">나의 TIL 잔디밭</p>
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
