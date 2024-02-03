import { useEffect, useState } from 'react';
import { getHistroyList } from '@api/HistoryAPI.ts';
import { DEBOUNCE_TIME } from '@util/Constants/constants.ts';
import HistroyItem from '@components/History/HistroyItem.tsx';

interface HistroySearchContentProps {
  keyword: string;
}

interface HistroyListResponse {
  rawData: string;
  createdAt: Date;
  visitedURL: string;
}

const HistroySearchContent = ({ keyword }: HistroySearchContentProps) => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!keyword) return;
      const result = await getHistroyList(keyword);
      setHistoryList(result);
    }, DEBOUNCE_TIME);
    return () => clearTimeout(timer);
  }, [keyword]);

  if (historyList.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2">
        <p className="text-3xl font-bold">검색 결과가 없어요.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 p-5">
      {historyList.map((data: HistroyListResponse, index: number) => (
        <HistroyItem key={index} {...data} />
      ))}
    </div>
  );
};

export default HistroySearchContent;
