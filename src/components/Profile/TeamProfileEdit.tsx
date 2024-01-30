import { ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '@api/FriendModal.ts';
import { useToast } from '@hooks/useToast.tsx';
import { Button } from '@material-tailwind/react';
import teamDefaultImage from '@assets/image/teamDefaultImage.jpeg';

interface ProfileEditProps {
  name: string;
}

const ProfileEdit = ({ name }: ProfileEditProps) => {
  const queryClient = useQueryClient();
  const openToast = useToast();
  const userId = localStorage.getItem('userId');
  const [newName, setNewName] = useState('');
  let teamImage = localStorage.getItem('teamProfileImage');
  if (teamImage === null || teamImage === '') {
    teamImage = teamDefaultImage;
  }

  const updateMutation = useMutation({
    mutationFn: (formData: FormData) => updateProfile(formData),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['profileData', userId],
      });
      openToast('팀 프로필 정보가 수정되었습니다.');
    },
    onError() {
      openToast('사진의 크기는 최대 10MB입니다.');
    },
  });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const onSubmit = () => {
    if (!newName) return;

    const formData = new FormData();

    if (newName) {
      formData.append('name', newName);
    }

    updateMutation.mutate(formData);
    setNewName('');
  };

  return (
    <div className="px-5">
      <p className="mb-20 text-2xl font-bold">팀 정보 수정</p>
      <div className="relative mb-5 flex flex-col items-center">
        <div className="group relative cursor-pointer text-center">
          <img
            className="mb-10 h-52 w-52 rounded-full object-cover group-hover:brightness-75"
            src={teamImage}
            alt={`${name} 프로필 이미지`}
          />
          <p className="h-h2 invisible absolute top-2/3 w-full text-white group-hover:visible">
            이미지 변경
          </p>
        </div>

        <input
          className="border-brown mb-3 h-10 w-1/2 rounded-xl border pl-3 outline-none"
          type="text"
          name="friendSearch"
          id="friendSearch"
          placeholder={name}
          value={newName}
          onChange={onChangeName}
        />
        <Button className="w-1/2 rounded-xl bg-amber-500 py-2 font-bold" onClick={onSubmit}>
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default ProfileEdit;
