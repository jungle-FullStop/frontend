import { KEYWORDS, QUOTES } from '@util/Constants/constants.ts';
import { Typography } from '@material-tailwind/react';

const todayQuote = new Date().getDay() % QUOTES.length;
const todayKeyword = new Date().getDay() % KEYWORDS.length;

export const Quotes = (props: any) => {
  return (
    <>
      {props.mode === 'user' ? (
        <div className="contents-container">
          <p className="text-center text-2xl font-bold">오늘의 Quotes</p>
          <div className="flex h-full items-center justify-center rounded bg-gray-100 p-3">
            <Typography className="whitespace-pre-wrap text-center font-bold">
              {QUOTES[todayQuote]}
            </Typography>
          </div>
        </div>
      ) : (
        <div className="contents-container">
          <div>
            <p className="text-center text-2xl font-bold">팀 공부 Keyword</p>
            <p className="text-center font-bold"> 다음 키워드에 관해 팀과 토론해보세요 </p>
          </div>
          <div className="flex h-full items-center justify-center rounded bg-gray-100 p-3">
            <Typography className="whitespace-pre-wrap text-center font-bold">
              {KEYWORDS[todayKeyword]}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};
