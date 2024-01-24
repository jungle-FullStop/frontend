import { useState } from 'react';
import Keyword from '@components/Common/Keyword';

const KeywordBox = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [keywordList, setKeywordList] = useState<string[]>(['React', 'Redux']);

  const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    <div className="flex flex-col justify-between pb-2">
      <p className="text-3xl font-bold">오늘의 TIL을 적어보세요!</p>
      <div className="flex flex-row justify-end">
        <div className="flex flex-wrap gap-4">
          {keywordList.map((keyword, index) => (
            <div className="cursor-pointer" key={index} onClick={() => deleteKeyword(keyword)}>
              <Keyword text={keyword} />
            </div>
          ))}
        </div>
        <input
          type="text"
          id="keywordInput"
          placeholder="키워드를 추가하세요"
          value={keyword}
          onChange={changeKeyword}
          className="border-brown ml-3 h-10 mb-3 w-max rounded-xl border pl-4 outline-none"
        />
      </div>
    </div>
  );
};

export default KeywordBox;
