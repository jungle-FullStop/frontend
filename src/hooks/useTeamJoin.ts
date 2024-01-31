import {
  type ChangeEventHandler,
  type FormEventHandler,
  type RefObject,
  type MouseEventHandler,
  useState,
} from 'react';
import { INVITE_CODE_LENGTH } from '@util/Constants/constants.ts';

export const useTeamJoin = (inputRef: RefObject<HTMLInputElement>) => {
  const [inviteCode, setInviteCode] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isRequired, setIsRequired] = useState(true);
  const [warningText, setWarningText] = useState('');

  const handleInviteCodeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: rawCode } = e.target;
    const code = rawCode.replace(/[^A-z0-9]/g, '');

    if (rawCode.length !== code.length) {
      setWarningText(() => '영어 대,소문자와 숫자만 입력 가능합니다.');
    }

    if (rawCode.length === code.length) {
      setWarningText(() => '');
    }

    if (code.length > INVITE_CODE_LENGTH) {
      setWarningText(() => '초대코드는 8자리입니다.');
    }

    setInviteCode(() => code.slice(0, INVITE_CODE_LENGTH));
  };

  const handleTeamNameSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inviteCode.length !== INVITE_CODE_LENGTH) {
      alert('8자리 초대코드를 입력해주세요.');
      inputRef.current?.focus();
      return;
    }
  };

  const handleCreatePageClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setIsRequired(() => false);
    setIsClicked(() => true);
  };
  return {
    inviteCode,
    isClicked,
    isRequired,
    warningText,

    handlers: {
      handleInviteCodeChange,
      handleTeamNameSubmit,
      handleCreatePageClicked,
    },
  };
};
