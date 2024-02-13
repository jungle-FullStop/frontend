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

  const rankType = (count: number) => {
    switch (count) {
      case 0:
        return 'border-gold';
      case 1:
        return 'border-silver';
      case 2:
        return 'border-bronze';
    }
  };

  const textType = (count: number) => {
    switch (count) {
      case 0:
        return 'text-gold';
      case 1:
        return 'text-silver';
      case 2:
        return 'text-bronze';
    }
  };

  return (
    <div className="rank-container">
      {friendListData.isLoading ? (
        <div className={'flex h-full items-center justify-center'}>
          <p>Loading...</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      ) : (
        <>
          <p className="TTLFont pb-3 text-center text-2xl font-bold">이달의 TIL 작성 순위</p>
          <div className="grid grid-cols-3">
            {friendListData.data.friends.length !== 0 ? (
              friendListData.data.friends
                .map((data: FriendListResponse, index: number) => (
                  <div
                    className={`mx-5 flex flex-col items-center rounded border-2 p-5 ${rankType(index)}`}
                    key={index}
                  >
                    <p className={`text-3xl font-extrabold ${textType(index)}`}>{index + 1}위</p>
                    <img
                      className={`border-brown-25 h-20 rounded-full border-2 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
                      src={data.profileImage ? data.profileImage : anonymousImage}
                      alt="프로필 사진"
                    />
                    <p className="font-normal">{data.name}</p>
                    <p className="text-2xl font-bold text-green-500">총 {data.tilScore}일</p>
                  </div>
                ))
                .slice(0, 3)
            ) : (
              <>
                <div></div>
                <div className="mx-auto">
                  <p className="flex pt-[80px] text-2xl font-bold">아직 친구가 없어요.</p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
