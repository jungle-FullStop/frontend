import { Typography } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useFriendRankListDataQuery } from '@hooks/useFriendListQuery.ts';

interface FriendListResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
  tilScore: number;
}

export const Friends = () => {
  const userId = localStorage.getItem('userId');
  const friendListData = useFriendRankListDataQuery(Number(userId));

  if (friendListData.isLoading) {
    return <p>친구목록 가져오는 중...</p>;
  }

  if (friendListData.isError) {
    return <p>친구목록을 불러오지 못했습니다!</p>;
  }

  return (
    <div className="contents-container">
      <Typography className="text-center text-2xl font-bold">TIL 연속 작성 순위</Typography>
      <div className="grid grid-cols-3">
        {friendListData.data.friends.length !== 0 ? (
          friendListData.data.friends
            .map((data: FriendListResponse, index: number) => (
              <div className="flex flex-col items-center" key={index}>
                <Typography className="font-extrabold">{index + 1}위</Typography>
                <img
                  className={`border-brown-25 h-20 rounded-full border-2 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
                  src={data.profileImage ? data.profileImage : anonymousImage}
                  alt="프로필 사진"
                />
                <Typography className="font-bold">{data.name}</Typography>
                <Typography className="font-bold text-green-500">현재 {data.tilScore}일</Typography>
              </div>
            ))
            .slice(0, 3)
        ) : (
          <>
            <div></div>
            <div className="flex w-full flex-col items-center justify-center gap-3">
              <p className="font-bold">아직 친구가 없어요.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
