import API_PATH from '@util/apiPath';

export const createMindmap = async () => {
  try {
    const response = await fetch(API_PATH.MINDMAP.create(), {});
    return await response.json();
  } catch (error) {
    console.error('마인드맵 생성에 실패했습니다.', error);
  }
};

export const findMindmap = async () => {
  try {
    const response = await fetch(API_PATH.MINDMAP.find(), {});

    return await response.json();
  } catch (error) {
    console.error('마인드맵을 찾는데 실패했습니다.', error);
  }
};
