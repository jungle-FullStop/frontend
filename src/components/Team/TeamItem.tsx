import anonymousImage from '@assets/image/anonymousImage.png';
import cokImage from '@assets/image/cokImage.png';
import debounce from 'lodash';
import { useState } from 'react';

interface MemberListProps {
  name: string;
  profileImage: string;
  status: string;
  tilScore: number;
  onPoke: any;
  cheerUp: any;
}

interface StatusStyles {
  bgClass: string;
  text: string;
  live: boolean;
}

const statusStyles: Record<string, StatusStyles> = {
  not_written: { bgClass: 'bg-gray-500', text: '미작성', live: false },
  writing: { bgClass: 'bg-red-500', text: '작성중', live: true },
  written: { bgClass: 'bg-green-500', text: '작성완료', live: false },
};

const TeamItem = ({ name, tilScore, status, profileImage, onPoke, cheerUp }: MemberListProps) => {
  const { bgClass, text, live } = statusStyles[status] || statusStyles.not_written;

  const [throttled, setThrottled] = useState(false);

  const handlePokeClick = () => {
    if (!throttled) {
      // 함수 실행
      onPoke();

      // 쓰로틀링 상태로 변경
      setThrottled(true);

      // 일정 시간(예: 1초) 후에 쓰로틀링 상태를 해제합니다.
      setTimeout(() => {
        setThrottled(false);
      }, 5000); // 5초
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      <div className="relative flex flex-col items-center">
        <img
          className={`h-16 w-16 rounded-full ${live ? 'border-2 border-red-500' : ''}`}
          src={profileImage ? profileImage : anonymousImage}
          alt={name}
        />
        {live && (
          <span className="absolute right-0 top-0 rounded-full bg-red-500 px-1 text-xs text-white">
            LIVE
          </span>
        )}
        <span className={`mt-2 px-3 py-1 text-sm text-white ${bgClass} rounded-full`}>{text}</span>
      </div>
      <div>
        <p className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</p>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          잔디 기여도 {tilScore * 10}%
        </p>
        {live && (
          <button
            onClick={cheerUp}
            className="mt-1 flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium leading-5 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img src={cokImage} className={'cock-button-img w-5'} />
            <p>응원하기</p>
          </button>
        )}
        {live || (
          <button
            // onClick={onPoke}
            onClick={handlePokeClick}
            className="mt-1 flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium leading-5 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img src={cokImage} className={'cock-button-img w-5'} />
            <p>콕 찌르기</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamItem;
