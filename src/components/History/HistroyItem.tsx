import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import SON from '@assets/image/SON.png';

interface RefItemProps {
  rawData: string;
  createdAt: Date;
  visitedURL: string;
}

const HistroyItem = ({ rawData, visitedURL, createdAt }: RefItemProps) => {
  // 현재 날짜를 얻어오기
  const currentDate = new Date(createdAt || new Date());
  // 년도, 달, 요일 변수에 담기
  const currentMonth: number = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const currentDay: number = currentDate.getDate();

  return (
    <Card
      className="w-full max-w-[48rem] cursor-pointer flex-row"
      onClick={() => window.open(visitedURL)}
    >
      <CardHeader shadow={false} floated={false} className="m-0 w-1/5 shrink-0 rounded-r-none">
        <img src={SON} alt="card-image" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="max-w-sm truncate text-xl font-bold">
          {rawData}
        </Typography>
        <Typography color="gray" className="max-w-sm truncate font-normal">
          {visitedURL}
        </Typography>
        <p className="font-normal">{`${currentMonth}월 ${currentDay}일에 수집됨`}</p>
      </CardBody>
    </Card>
  );
};

export default HistroyItem;
