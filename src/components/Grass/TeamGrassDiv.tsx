import { TeamGrass } from '@/components/Grass/TeamGrass';
import { useGetTeamGrass } from '@hooks/useGetTeamGrass.ts';


export const TeamGrassDiv = () => {
  const teamName = localStorage.getItem('teamName');
  const TilData = useGetTeamGrass();

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
          <p className=" grassFont text-center text-2xl text-black">
          팀 <span className={'text-green-500'}>{teamName}</span> 텃밭
        </p>
          <div className=" grassFont mx-auto mb-4 grid w-[450px] grid-cols-7 grid-rows-1 p-2 text-center text-xl font-bold text-black">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
          </div>
          <div className="bg-grassColor mx-auto grid h-[300px] w-[450px] grid-cols-7 grid-rows-5 rounded-lg  p-2">
            {grassElements}
          </div>
        </div>
      </div>
    </>
  );
};
