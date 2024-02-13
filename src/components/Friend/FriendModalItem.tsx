import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  cancelRequestFriend,
  deleteFriend,
  allowFriend,
  rejectFriend,
  requestFriend,
} from '@api/FriendModal.ts';

import { useToast } from '@hooks/Common/useToast.tsx';

import { PROFILE_BUTTON_TYPE, reactQueryKeys } from '@util/Constants/constants.ts';
import { Button } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';

interface FriendModalItemProps {
  email: string;
  profileImage: string;
  name: string;
  id: string;
  type: string;
}

const DB_WAITING_TIME = 100;

const FriendModalItem = ({ email, profileImage, name, id, type }: FriendModalItemProps) => {
  const queryClient = useQueryClient();
  const openToast = useToast();

  const requestFriendMutation = useMutation({
    mutationFn: (receiverId: number) => requestFriend(receiverId),
    onSuccess() {
      openToast('친구 요청을 보냈습니다.');
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: [reactQueryKeys.SendList],
        });
        queryClient.invalidateQueries({
          queryKey: [reactQueryKeys.ProfileData],
        });
      }, 100);
    },
  });

  const cancelRequestMutation = useMutation({
    mutationFn: (receiverId: number) => cancelRequestFriend(receiverId),
    onSuccess() {
      openToast('친구 신청을 취소했습니다.');
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: [reactQueryKeys.SendList],
        });
      }, DB_WAITING_TIME);
    },
  });

  const deleteFriendMutation = useMutation({
    mutationFn: (friendId: number) => deleteFriend(friendId),
    onSuccess() {
      openToast('친구가 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.FriendList],
      });
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.ProfileData],
      });
    },
  });

  const allowFriendMutation = useMutation({
    mutationFn: (senderId: number) => allowFriend(senderId),
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

  const rejectFriendMutation = useMutation({
    mutationFn: (senderId: number) => rejectFriend(senderId),
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
          <Button
            onClick={() => {
              deleteFriendMutation.mutate(+id);
            }}
            className="btn-delete"
          >
            친구 삭제
          </Button>
        );
      case PROFILE_BUTTON_TYPE.RECEIVED:
        return (
          <div className="flex gap-2">
            <Button
              onClick={() => {
                rejectFriendMutation.mutate(+id);
              }}
              className="btn-reject"
            >
              거절
            </Button>
            <Button
              onClick={() => {
                allowFriendMutation.mutate(+id);
              }}
              className="btn-accept"
            >
              수락
            </Button>
          </div>
        );
      case PROFILE_BUTTON_TYPE.SEND:
        return (
          <Button
            onClick={() => {
              cancelRequestMutation.mutate(+id);
            }}
            className="btn-reject"
          >
            신청 취소
          </Button>
        );
      case PROFILE_BUTTON_TYPE.STRANGER:
        return (
          <Button
            onClick={() => {
              requestFriendMutation.mutate(+id);
            }}
            className="btn-request"
          >
            친구 요청
          </Button>
        );
    }
  };

  const buttonContent = getButtonElement(type);

  // 프로필 이미지가 없을 경우, 기본 이미지로 대체
  if (profileImage === null || profileImage === '') {
    profileImage = anonymousImage;
  }

  return (
    <div className="flex flex-row">
      <img
        className="mr-3 h-16 w-16 cursor-pointer rounded-full object-cover"
        src={profileImage}
        alt={`${name} 프로필 이미지`}
      />
      <div className="flex flex-col">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-gray text-xs">{email}</p>
        {buttonContent}
      </div>
    </div>
  );
};

export default FriendModalItem;
