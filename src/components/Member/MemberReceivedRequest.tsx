import useRequestListQuery from '@hooks/useRequestListQuery.ts';
import { PROFILE_BUTTON_TYPE, reactQueryKeys } from '@util/Constants/constants.ts';
import MemberModalItem from '@components/Member/MemberModalItem.tsx';

interface ReceivedListResponse {
  senderId: number;
  receiverId: number;
  email: string;
  name: string;
  profileImage: string;
}

interface ReceivedRequestProps {
  userId: number;
}

interface ReceivedList {
  email: string;
  profileImage: string;
  name: string;
  id: string;
}

const ReceivedRequest = ({ userId }: ReceivedRequestProps) => {
  const { data, isLoading, isError } = useRequestListQuery(reactQueryKeys.ReceivedList, userId);

  if (isLoading) {
    return <p>받은 팀원 신청목록을 불러오는 중...</p>;
  }

  if (isError) {
    return <p>받은 팀원 신청목록을 불러오지 못했습니다!</p>;
  }

  const ReceivedList = data.strangers
    .filter((v: ReceivedListResponse) => v.receiverId === userId)
    .map((v: ReceivedListResponse) => {
      const newObj = {
        email: v.email,
        name: v.name,
        id: v.senderId,
        profileImage: v.profileImage,
      };
      return newObj;
    });

  if (ReceivedList.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="font-bold">받은 팀원요청이 없어요.</p>
      </div>
    );
  }

  return ReceivedList.map((data: ReceivedList, index: number) => (
    <MemberModalItem key={index} {...data} type={PROFILE_BUTTON_TYPE.RECEIVED} />
  ));
};

export default ReceivedRequest;
