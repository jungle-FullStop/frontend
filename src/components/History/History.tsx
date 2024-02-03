import { KeyboardEvent, ChangeEvent, useState } from 'react';
import Keyword from '@components/History/Keyword.tsx';
import HistroySearchContent from '@components/History/HistroySearchContent.tsx';

const History = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [keywordList, setKeywordList] = useState<string[]>(['React', 'Redux']);

  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const addKeyword = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (!keywordList.includes(keyword)) {
      setKeywordList([...keywordList, keyword]);
    }

    setKeyword('');
  };

  const deleteKeyword = (keyword: string) => {
    const newKeywordList = keywordList.filter((value) => value !== keyword);
    setKeywordList(newKeywordList);
  };

  const keywordInput = document.getElementById('keywordInput');
  if (keywordInput != null) {
    keywordInput.addEventListener('keydown', (e: any) => {
      addKeyword(e);
    });
  }

  return (
    <>
      <p className="text-end text-3xl font-bold">키워드를 검색해서</p>
      <div className="flex flex-row">
        <input
          type="text"
          id="keywordInput"
          placeholder="키워드를 입력하세요"
          value={keyword}
          onChange={changeKeyword}
          className="border-brown h-10 w-max rounded-xl border px-4 outline-none"
        />
        <div className="flex flex-wrap gap-2 pl-5">
          {keywordList.map((keyword, index) => (
            <div className="cursor-pointer" key={index} onClick={() => deleteKeyword(keyword)}>
              <Keyword text={keyword} />
            </div>
          ))}
        </div>
      </div>
      <HistroySearchContent keyword={keyword} />
    </>
  );
};

export default History;
