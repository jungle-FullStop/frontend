import { ChangeEvent, useState } from 'react';
import Keyword from '@components/History/Keyword.tsx';
import HistroySearchContent from '@components/History/HistroySearchContent.tsx';
import { useRecoilValue } from 'recoil';
import { todayKeyword } from '@store/Store.ts';

const History = () => {
  const [keyword, setKeyword] = useState<string>('');
  const keywordList = useRecoilValue(todayKeyword);

  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <p className="mb-3 text-xl font-bold">마인드맵의 키워드를 검색하세요 !</p>
      <div className={'flex flex-col gap-y-4'}>
        <div className="flex flex-row">
          <div className={'flex flex-row items-center'}>
            <p className="text-xl font-bold">키워드:</p>
            <input
              type="text"
              id="keywordInput"
              placeholder="키워드를 입력하세요"
              value={keyword}
              onChange={changeKeyword}
              className="border-brown ml-3 h-10 rounded-xl border px-4 outline-none"
            />
          </div>
        </div>
        <HistroySearchContent keyword={keyword} />
        <div className="mr-auto flex flex-wrap gap-2">
          {keywordList.map((keyword, index) => (
            <div className="cursor-pointer" key={index} onClick={() => setKeyword(keyword)}>
              <Keyword text={keyword} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default History;
