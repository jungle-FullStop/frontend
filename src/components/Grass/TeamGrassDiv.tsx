import { TeamGrass } from '@/components/Grass/TeamGrass';
import { useGetTeamGrass } from '@hooks/useGetTeamGrass.ts';

export const TeamGrassDiv = () => {
  const teamName = localStorage.getItem('teamName');
  const TilData = useGetTeamGrass();

  const grassElements = TilData.map((data, i) => {
    return <TeamGrass date={data.date} count={data.count} pageId={data.id} key={i} iter={i} />;
  });

  const teamScore = TilData.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <>
      <div className="grass-container">
        <div>
          <p className="TILFont pb-3 text-center text-2xl">
            팀 <span className={'text-green-500'}>{teamName}</span> 텃밭
          </p>
          <div className="grassFont mx-auto grid w-[700px] grid-cols-7 grid-rows-1 p-2 text-center text-xl font-bold">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
          </div>
          <div className="mx-auto grid h-[500px] w-[700px] grid-cols-7 grid-rows-5 rounded-lg bg-grassColor  p-2">
            {grassElements}
          </div>
        </div>
        <p className="ml-auto mr-[30px] mt-3 text-xl font-bold text-gray-600">
          이번 달 {teamScore}개의 Team TIL가 작성되었습니다 !
        </p>
      </div>
    </>
  );
};
