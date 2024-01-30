import API_PATH from '@util/apiPath';

import interceptor from '@api/fetchInterceptor';

export const getMemberList = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.list(userId), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('팀원목록 조회에 실패했습니다.', error);
  }
};

export const recommendMember = async (name: string) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.search(name), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('내 팀원목록 검색에 실패했습니다.', error);
  }
};

export const getRequestList = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.request(userId), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('진행중인 팀원 요청목록 조회에 실패했습니다.', error);
  }
};

export const getSearchUserList = async (name: string) => {
  try {
    const response = await interceptor(API_PATH.USER.searchUser(name), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('새로운 유저검색에 실패했습니다.', error);
  }
};

export const requestMember = async (receiverId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.request(receiverId), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ receiverId }),
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('팀원요청에 실패했습니다.', error);
  }
};

export const cancelRequestMember = async (receiverId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.request(receiverId), {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('팀원요청 취소에 실패했습니다.', error);
  }
};

export const deleteMember = async (friendId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.list(friendId), {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('팀원 삭제에 실패했습니다.', error);
  }
};

export const allowMember = async (senderId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.allow(senderId), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ senderId }),
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('팀원요청 수락에 실패했습니다.', error);
  }
};

export const rejectMember = async (senderId: number) => {
  try {
    const response = await interceptor(API_PATH.MEMBER.allow(senderId), {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('팀원요청 거절에 실패했습니다.', error);
  }
};

export const updateProfile = async (formData: FormData) => {
  try {
    const response = await interceptor(API_PATH.USER.profile(), {
      method: 'PATCH',
      credentials: 'include',
      body: formData,
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('프로필 변경에 실패했습니다.', error);
  }
};
