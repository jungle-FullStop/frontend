import { Typography } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';

export const Friends = () => {
  return (
    <div className="contents-container card-front">
      <Typography className="text-center text-2xl font-bold">현재 함께하는 친구</Typography>
      <div className="grid grid-cols-3">
        {[...Array(5)].map((i) => {
          return (
            <div className="flex flex-col items-center" key={i}>
              <img
                className={`border-brownw-25 h-20 rounded-full border-2 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
                src={anonymousImage}
                alt="프로필 사진"
              />
              <Typography className="font-bold">정준희</Typography>
              <Typography className="font-bold text-green-500">현재 3일</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
