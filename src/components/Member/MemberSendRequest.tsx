import useSendListQuery from '@hooks/useRequestListQuery.ts';
import { PROFILE_BUTTON_TYPE, reactQueryKeys } from '@util/Constants/constants.ts';
import MemberModalItem from '@components/Member/MemberModalItem.tsx';

interface SendRequestProps {
  userId: number;
}

interface SendListResponse {
  senderId: number;
  receiverId: number;
  email: string;
  name: string;
  profileImage: string;
}
interface SendList {
  email: string;
  profileImage: string;
  name: string;
  id: string;
}

const SendRequest = ({ userId }: SendRequestProps) => {
  const { data, isLoading, isError } = useSendListQuery(reactQueryKeys.SendList, userId);

  if (isLoading) {
    return <p>보낸 팀원 신청목록을 불러오는 중...</p>;
  }

  if (isError) {
    return <p>보낸 팀원 신청목록을 불러오지 못했습니다!</p>;
  }

  const sendList = data.strangers
    .filter((v: SendListResponse) => v.senderId === userId)
    .map((v: SendListResponse) => {
      const newObj = {
        email: v.email,
        name: v.name,
        id: v.receiverId,
        profileImage: v.profileImage,
      };
      return newObj;
    });

  if (sendList.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="font-bold">보낸 팀원요청이 없어요.</p>
      </div>
    );
  }

  return sendList.map((data: SendList, index: number) => (
    <MemberModalItem key={index} {...data} type={PROFILE_BUTTON_TYPE.SEND} />
  ));
};

export default SendRequest;
