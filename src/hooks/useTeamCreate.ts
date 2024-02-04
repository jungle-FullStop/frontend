import { ChangeEventHandler, FormEventHandler, RefObject, useState } from 'react';
import { createTeam } from '@api/TeamAPI.ts';

export const useTeamCreate = (inputRef: RefObject<HTMLInputElement>) => {
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');

  const handleTeamNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTeamName(() => e.target.value);
  };

  const handleTeamDescriptionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTeamDescription(() => e.target.value);
  };

  const handleTeamNameSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const isRightName = confirm(`"${teamName}"으로 팀을 개설하시겠습니까?`);

    if (!isRightName) {
      inputRef.current?.focus();
      return;
    }

    // 새 팀 정보
    const newTeam = await createTeam(teamName, teamDescription);
    if (newTeam) {
      localStorage.setItem('teamId', newTeam.id);
      localStorage.setItem('teamCode', newTeam.code);
      localStorage.setItem('teamName', newTeam.name);
      localStorage.setItem('teamDescription', newTeam.description);
      localStorage.setItem('teamCreateAt', newTeam.createdAt);
    } else {
      alert('팀 생성에 실패했습니다.');
      return;
    }
    window.location.href = '/home';
  };

  return {
    teamName,
    teamDescription,
    handlers: {
      handleTeamNameChange,
      handleTeamDescriptionChange,
      handleTeamNameSubmit,
    },
  };
};
