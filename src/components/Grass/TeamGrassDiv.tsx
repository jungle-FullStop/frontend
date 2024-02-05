import { TeamGrass } from '@/components/Grass/TeamGrass';
import { useGetTeamGrass } from '@hooks/useGetTeamGrass.ts';

export const TeamGrassDiv = () => {
  const teamName = localStorage.getItem('teamName');
  const TilData = useGetTeamGrass();

  const grassElements = TilData.map((data, i) => {
    return <TeamGrass date={data.date} count={data.count} pageId={data.id} key={i} />;
  });

  return (
    <div className="grass-container">
      <div>
        {/* <p className="text-center text-lg font-bold sm:text-2xl">
          팀 <span className={'text-green-500'}>{teamName}</span> 텃밭
        </p> */}
        <div className="mx-auto grid w-[450px] grid-cols-7 grid-rows-1 p-2 mb-4 text-center font-bold text-xl">
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
  );
};
