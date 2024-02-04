import API_PATH from '@util/apiPath';

import interceptor from '@api/fetchInterceptor';

export const createTeam = async (teamName: string, teamDescription: string) => {
  try {
    const response = await interceptor(API_PATH.TEAM.create(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: teamName, description: teamDescription }),
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('팀 생성에 실패했습니다.', error);
    return null;
  }
};

export const joinTeam = async (teamCode: string) => {
  try {
    const response = await interceptor(API_PATH.TEAM.join(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: teamCode }),
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('팀 가입에 실패했습니다.', error);
    return null;
  }
};

export const getTeamProfile = async (teamCode: string) => {
  try {
    const response = await interceptor(API_PATH.TEAM.teamProfile(teamCode), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('팀 조회에 실패했습니다.', error);
    return null;
  }
};

export const getTeamUsers = async () => {
  try {
    const fetchUrl = API_PATH.TEAM.list();
    const response = await interceptor(fetchUrl, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('일기 목록 조회에 실패했습니다.', error);
  }
};
