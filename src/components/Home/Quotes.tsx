import { KEYWORDS, QUOTES } from '@util/Constants/constants.ts';

const todayQuote = new Date().getDay() % QUOTES.length;
const todayKeyword = new Date().getDay() % KEYWORDS.length;

export const Quotes = (props: any) => {
  return (
    <>
      {props.mode === 'user' ? (
        <div className="contents-container">
          <div>
            <p className="text-center text-2xl font-bold">오늘의 Quotes</p>
            <p className="text-center font-bold"> 오늘도 화이팅입니다! -티나끝 개발자- </p>
          </div>
          <div className="flex h-full items-center justify-center rounded bg-gray-100 p-3">
            <p className="whitespace-pre-wrap text-center font-normal">{QUOTES[todayQuote]}</p>
          </div>
        </div>
      ) : (
        <div className="contents-container">
          <div>
            <p className="text-center text-2xl font-bold">오늘의 공부 Keyword</p>
            <p className="text-center font-bold"> 다음 키워드에 관해 팀과 토론해보세요 </p>
          </div>
          <div className="flex h-full items-center justify-center rounded bg-gray-100 p-3">
            <p className="whitespace-pre-wrap text-center font-normal">{KEYWORDS[todayKeyword]}</p>
          </div>
        </div>
      )}
    </>
  );
};
