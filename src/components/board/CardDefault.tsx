import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';

import ReactMarkdown from 'react-markdown';
import TIL from '@assets/image/TIL.png';

export function CardDefault(props: any) {
  // 현재 날짜를 얻어오기
  const currentDate = new Date(props.cardDate);

  // 년도, 달, 요일 변수에 담기
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: number = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const currentDay: number = currentDate.getDate();

  //카드 내용 최대 20자로 줄임
  const shortenedContents = props.cardContents.slice(0, 70) + ' ...';

  const userImage = localStorage.getItem('userProfileImage');
  const userName = localStorage.getItem('userName');

  // console.log(props.cardContents);
  // console.log('Year:', currentYear);
  // console.log('Month:', currentMonth);
  // console.log('Day:', currentDay);

  return (
    <Card className="h-full max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 h-20 w-full rounded-none"
      >
        <img src={TIL} alt="ui/ux review check " className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="h-2/3">
        <Typography variant="h4" color="blue-gray">
          {` ${currentMonth}월 ${currentDay}일 TIL`}
        </Typography>
        <div className="m-5"></div>
        <ReactMarkdown>{shortenedContents}</ReactMarkdown>
      </CardBody>
      <div style={{ border: '1px solid grey' }}></div>
      <CardFooter className="flex  items-center justify-between p-4">
        <div className="flex items-center">
          <Tooltip content={userName}>
            <Avatar size="sm" variant="circular" src={userImage || undefined} />
          </Tooltip>
        </div>
        <Typography className="font-normal">{`${currentYear}년 ${currentMonth}월 ${currentDay}일`}</Typography>
      </CardFooter>
    </Card>
  );
}
