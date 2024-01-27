import { dateRange } from '@/util/Constants/dateConstants';
import { Grass } from '@/components/Home/Grass';
import { Button } from '@material-tailwind/react';

export const UserGrass = () => {
  const grassElements = dateRange.map((date, i) => {
    return <Grass date={date} i={i} key={i} />;
  });

  return (
    <div className="contents-container card">
              <div className='card-back'>
              <p className="text-center text-lg font-bold sm:text-2xl">이번 달 TIL HISTORY.</p>
              <div>
                <div className="grid w-80 grid-cols-7 grid-rows-1 p-2 text-center">
                  <p>Sun</p>
                  <p>Mon</p>
                  <p>Tue</p>
                  <p>Wed</p>
                  <p>Thu</p>
                  <p>Fri</p>
                  <p>Sat</p>
                </div>
                <div className="border-brown grid w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2 ">
                  {grassElements}
                </div>
              </div>
              <Button variant="outlined" className="flex items-center gap-3">
                뒤집기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </Button>
              </div>

            </div>
  );
};
