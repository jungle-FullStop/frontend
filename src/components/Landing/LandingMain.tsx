import { Typography } from '@material-tailwind/react';

export const LandingMain = () => {
  return (
    <div>
      <Typography color="orange" className="text-5xl font-semibold">
        TIL을 쓰지 않으면,
      </Typography>
      <Typography color="orange" className="mb-3 text-5xl font-semibold">
        나의 하루는 끝나지 않는다
      </Typography>
      <Typography color="amber" className="mb-7 text-7xl font-black">
        티.나.끝
      </Typography>
      <div id="LoreTextContainer" className="mb-14">
        <Typography color="white" className="text-3xl font-extrabold">
          티.나.끝의 가이드라인과 함께
        </Typography>
        <Typography color="white" className="text-3xl font-extrabold">
          TIL을 작성해보세요.
        </Typography>
      </div>
    </div>
  );
};
