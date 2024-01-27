import { dateRange } from '@/util/Constants/dateConstants';
import { Grass } from '@/components/Home/Grass';

export const UserGrass = () => {
  const grassElements = dateRange.map((date, i) => {
    return <Grass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container">
      <p className="text-center text-lg font-bold sm:text-2xl">이번 달 TIL HISTORY.</p>
      <div className="border-brown container mx-auto grid h-auto w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2">
        {grassElements}
      </div>
    </div>
  );
};
