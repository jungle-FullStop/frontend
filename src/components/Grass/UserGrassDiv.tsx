import { UserGrass } from '@components/Grass/UserGrass.tsx';
import { useGetUserGrass } from '@hooks/useGetUserGrass.ts';

export const UserGrassDiv = () => {
  const TilData = useGetUserGrass();
  const tilScore = localStorage.getItem('tilScore');

  const grassElements = TilData.map((data, i) => {
    return <UserGrass date={data.date} count={data.count} pageId={data.id} key={i} iter={i} />;
  });

  return (
    <>
      <div className="grass-container">
        <div>
          <p className="TTLFont pb-3  text-center text-2xl text-black">
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
    </>
  );
};
