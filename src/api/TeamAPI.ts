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
    return await response.json();
  } catch (error) {
    console.log('팀 조회에 실패했습니다.', error);
    return null;
  }
};

export const getMemberList = async () => {
  try {
    const fetchUrl = API_PATH.TEAM.list();
    const response = await interceptor(fetchUrl, {
      method: 'POST',
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.log('팀원목록 조회에 실패했습니다.', error);
  }
};

export const getMemberRankList = async () => {
  try {
    const fetchUrl = API_PATH.TEAM.rankList();
    const response = await interceptor(fetchUrl, {
      method: 'POST',
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.log('팀원목록 조회에 실패했습니다.', error);
  }
};

export const recommendMember = async (name: string) => {
  try {
    const response = await interceptor(API_PATH.TEAM.search(name), {
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.log('내 팀원목록 검색에 실패했습니다.', error);
  }
};

export const exileMember = async (memberId: number) => {
  try {
    await interceptor(API_PATH.TEAM.exile(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: memberId }),
      credentials: 'include',
    });
  } catch (error) {
    console.error('팀원 삭제에 실패했습니다.', error);
  }
};
