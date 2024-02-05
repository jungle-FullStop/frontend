import API_PATH from '@/util/apiPath';

export const userGrassInfo = async (userId: number, date: Date) => {
  try {
    const response = await fetch(API_PATH.Grass.user(userId, date), {
      method: 'GET',
    });
    const userGrass = await response.json();
    return userGrass;
  } catch (error) {
    console.error('개인 잔디 정보를 찾는데 실패했습니다.', error);
  }
};

export const teamGrassInfo = async (userId: number, date: Date) => {
  try {
    const response = await fetch(API_PATH.Grass.team(userId, date), {
      method: 'GET',
    });
    const teamGrass = await response.json();
    return teamGrass;
  } catch (error) {
    console.error('팀 잔디 정보를 찾는데 실패했습니다.', error);
  }
};
