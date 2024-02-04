import { ChangeEventHandler, FormEventHandler, RefObject, useState } from 'react';
import { createTeam } from '@api/TeamAPI.ts';

export const useTeamCreate = (inputRef: RefObject<HTMLInputElement>) => {
  const [teamName, setTeamName] = useState('');

  const handleTeamNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTeamName(() => e.target.value);
  };

  const handleTeamNameSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isRightName = confirm(`"${teamName}"으로 팀을 개설하시겠습니까?`);

    if (!isRightName) {
      inputRef.current?.focus();
      return;
    }

    createTeam(teamName);
    window.location.href = '/home';
  };

  return {
    teamName,

    handlers: {
      handleTeamNameChange,
      handleTeamNameSubmit,
    },
  };
};
