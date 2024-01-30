import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { cancelRequestMember, deleteMember, allowMember, rejectMember } from '@api/MemberModal.ts';

import { useToast } from '@hooks/useToast.tsx';

import { PROFILE_BUTTON_TYPE, PAGE_URL, reactQueryKeys } from '@util/Constants/constants.ts';

interface MemberModalItemProps {
  email: string;
  profileImage: string;
  name: string;
  id: string;
  type: string;
}

const DB_WAITING_TIME = 100;

const MemberModalItem = ({ email, profileImage, name, id, type }: MemberModalItemProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const openToast = useToast();

  const goMemberHome = () => {
    navigate(`${PAGE_URL.HOME}${id}`);
    queryClient.removeQueries({
      queryKey: [reactQueryKeys.ProfileData],
    });
  };

  const cancelRequestMutation = useMutation({
    mutationFn: (receiverId: number) => cancelRequestMember(receiverId),
    onSuccess() {
      openToast('친구 신청을 취소했습니다.');
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: [reactQueryKeys.SendList],
        });
      }, DB_WAITING_TIME);
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: (memberId: number) => deleteMember(memberId),
    onSuccess() {
      openToast('친구가 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.MemberList],
      });
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.ProfileData],
      });
    },
  });

  const allowMemberMutation = useMutation({
    mutationFn: (senderId: number) => allowMember(senderId),
    onSuccess() {
      openToast('친구 요청을 수락하였습니다.');
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.ReceivedList],
      });
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.ProfileData],
      });
    },
  });

  const rejectMemberMutation = useMutation({
    mutationFn: (senderId: number) => rejectMember(senderId),
    onSuccess() {
      openToast('친구 요청을 거절하였습니다.');
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: [reactQueryKeys.ReceivedList],
        });
      }, DB_WAITING_TIME);
    },
  });

  const getButtonElement = (type: string) => {
    switch (type) {
      case PROFILE_BUTTON_TYPE.LIST:
        return (
          <button
            onClick={() => {
              deleteMemberMutation.mutate(+id);
            }}
            className="bg-mint w-3/5 rounded-md border-none px-2 py-1 text-[0.7rem] font-bold"
          >
            친구 삭제
          </button>
        );
      case PROFILE_BUTTON_TYPE.RECEIVED:
        return (
          <div className="flex gap-2">
            <button
              onClick={() => {
                rejectMemberMutation.mutate(+id);
              }}
              className="bg-red w-2/5 rounded-md border-none px-2 py-1 text-[0.7rem] font-bold text-white"
            >
              거절
            </button>
            <button
              onClick={() => {
                allowMemberMutation.mutate(+id);
              }}
              className="bg-mint w-2/5 rounded-md border-none px-2 py-1 text-[0.7rem] font-bold"
            >
              수락
            </button>
          </div>
        );
      case PROFILE_BUTTON_TYPE.SEND:
        return (
          <button
            onClick={() => {
              cancelRequestMutation.mutate(+id);
            }}
            className="bg-red w-3/5 rounded-md border-none px-2 py-1 text-[0.7rem] font-bold text-white"
          >
            신청 취소
          </button>
        );
      case PROFILE_BUTTON_TYPE.STRANGER:
        return <div></div>;
    }
  };

  const buttonContent = getButtonElement(type);

  return (
    <div className="mb-5 mr-3 flex w-full">
      <div className="w-28">
        <img
          className="mr-3 h-16 w-16 cursor-pointer rounded-full object-cover"
          onClick={goMemberHome}
          src={profileImage}
          alt={`${name} 프로필 이미지`}
        />
      </div>
      <div className="flex w-full flex-col">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-gray text-xs">{email}</p>
        {buttonContent}
      </div>
    </div>
  );
};

export default MemberModalItem;
