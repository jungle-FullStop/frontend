import { useMutation, useQueryClient } from '@tanstack/react-query';

import { exileMember } from '@api/TeamAPI.ts';

import { useToast } from '@hooks/useToast.tsx';

import { PROFILE_BUTTON_TYPE, reactQueryKeys } from '@util/Constants/constants.ts';
import { Button } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';

interface MemberModalItemProps {
  email: string;
  profileImage: string;
  name: string;
  id: string;
  type: string;
}

const MemberModalItem = ({ email, profileImage, name, id, type }: MemberModalItemProps) => {
  const queryClient = useQueryClient();
  const openToast = useToast();

  const deleteMemberMutation = useMutation({
    mutationFn: (memberId: number) => exileMember(memberId),
    onSuccess() {
      openToast('팀원이 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.MemberList],
      });
      queryClient.invalidateQueries({
        queryKey: [reactQueryKeys.ProfileData],
      });
    },
  });

  const getButtonElement = (type: string) => {
    switch (type) {
      case PROFILE_BUTTON_TYPE.LIST:
        return (
          <Button
            onClick={() => {
              deleteMemberMutation.mutate(+id);
            }}
            className="btn-delete"
          >
            팀원 삭제
          </Button>
        );
      case PROFILE_BUTTON_TYPE.STRANGER:
        return <div></div>;
    }
  };

  const buttonContent = getButtonElement(type);

  // 프로필 이미지가 없을 경우, 기본 이미지로 대체
  if (profileImage === null || profileImage === '') {
    profileImage = anonymousImage;
  }

  return (
    <div className="mb-5 mr-3 flex w-full">
      <div className="w-28">
        <img
          className="mr-3 h-16 w-16 cursor-pointer rounded-full object-cover"
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
