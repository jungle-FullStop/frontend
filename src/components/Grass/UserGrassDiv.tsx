import { UserGrass } from '@components/Grass/UserGrass.tsx';
import { useGetUserGrass } from '@hooks/useGetUserGrass.ts';
import { numberOfTILSate } from '@/store/Store';
import { useRecoilValue } from 'recoil';

export const UserGrassDiv = () => {
  const TilData = useGetUserGrass();
  const numberOfTIL = useRecoilValue(numberOfTILSate);

  const grassElements = TilData.map((data, i) => {
    return <UserGrass date={data.date} count={data.count} pageId={data.id} key={i} iter={i} />;
  });

  return (
    <>
      <div className="grass-container">
        <div>
          <p className="grassFont text-center  text-2xl text-black ">
            나의 <span className="text-yellow-800">TIL</span> 텃밭
          </p>
          <div className="grassFont mx-auto mb-4 grid w-[600px] grid-cols-7 grid-rows-1 p-2 text-center text-xl font-bold text-black">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
          </div>
          <div className="mx-auto grid h-[450px] w-[600px] grid-cols-7 grid-rows-5 rounded-lg bg-grassColor  p-2">
            {grassElements}
          </div>
        </div>
        <p className="mt-10 inline-block text-lg font-bold text-gray-600">
          이번 달 {numberOfTIL}개의 TIL을 작성하셨습니다 !
        </p>
      </div>
    </>
  );
};
