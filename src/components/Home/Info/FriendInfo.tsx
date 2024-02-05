import anonymousImage from '@assets/image/anonymousImage.png';
import { useFriendRankListDataQuery } from '@hooks/useFriendListQuery.ts';

interface FriendListResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
  tilScore: number;
}

export const FriendInfo = () => {
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
      <p className="text-center text-2xl font-bold">이달의 TIL 작성 순위</p>
      <div className="grid grid-cols-3">
        {friendListData.data.friends.length !== 0 ? (
          friendListData.data.friends
            .map((data: FriendListResponse, index: number) => (
              <div className="flex flex-col items-center" key={index}>
                <p className="font-extrabold">{index + 1}위</p>
                <img
                  className={`border-brown-25 h-20 rounded-full border-2 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
                  src={data.profileImage ? data.profileImage : anonymousImage}
                  alt="프로필 사진"
                />
                <p className="font-normal">{data.name}</p>
                <p className="font-bold text-green-500">총 {data.tilScore}일</p>
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
