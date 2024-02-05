import { KEYWORDS, QUOTES } from '@util/Constants/constants.ts';

const todayQuote = new Date().getDay() % QUOTES.length;
const todayKeyword = new Date().getDay() % KEYWORDS.length;

export const Quotes = (props: any) => {
  return (
    <>
      {props.mode === 'user' ? (
        <div className="quote-container">
          <div>
            <p className="mb-3 text-center text-2xl font-bold">오늘의 Quotes</p>
          </div>
          <div className="flex w-full items-center justify-center rounded bg-gray-200 p-3">
            <p className=" whitespace-pre-wrap text-center font-normal italic">
              {QUOTES[todayQuote]}
            </p>
          </div>
          <p className=" mb-2 mt-4 text-center font-bold underline decoration-indigo-500 underline-offset-4">
            {' '}
            오늘도 화이팅입니다! -티나끝 개발자-{' '}
          </p>
        </div>
      ) : (
        <div className="quote-container">
          <div>
            <p className="mb-3 text-center text-2xl font-bold">오늘의 공부 Keyword</p>
          </div>
          <div className="flex w-full items-center justify-center rounded bg-gray-200 p-3">
            <p className="whitespace-pre-wrap text-center font-normal italic">{KEYWORDS[todayKeyword]}</p>
          </div>
          <p className=" mb-2 mt-4 text-center font-bold underline decoration-indigo-500 underline-offset-4">
            {' '}
            다음 키워드에 관해 팀과 토론해보세요{' '}
          </p>
        </div>
      )}
    </>
  );
};
