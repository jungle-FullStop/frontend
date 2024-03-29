import { UserProfile } from '@components/Home/Profile/UserProfile.tsx';
import { WriteTIL } from '@components/Home/WriteTIL.tsx';
import { Quotes } from '@components/Home/Quotes.tsx';
import { Ad } from '@components/Common/Ad.tsx';
import useThrottleScroll from '@hooks/Common/useThrottleScroll.ts';
import { TeamProfile } from '@components/Home/Profile/TeamProfile.tsx';

export const HomeSideBar = (props: any) => {
  const barPosition = useThrottleScroll(100, 50, 540);
  return (
    <div className={'sidebar-container'}>
      <div className={'sidebar'} style={{ transform: `translateY(${barPosition}px)` }}>
        <div className="flex flex-col gap-y-3">
          {props.mode === 'user' ? <UserProfile /> : <TeamProfile />}
          <WriteTIL color={props.color} flipCard={props.flipCard} />
          <Quotes mode={props.mode} />
          <Ad mode={'jungle'} />
        </div>
      </div>
    </div>
  );
};
