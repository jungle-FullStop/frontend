import API_PATH from '@util/apiPath';

const TEMP_ID = 1;

interface mindmapInfo {
  data: any;
}

export const createMindmap = async () => {
  try {
    const response = await fetch(API_PATH.MINDMAP.create(TEMP_ID), {
      method: 'GET',
    });
    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    return response.ok;
  } catch (error) {
    console.error('가이드라인 생성에 실패했습니다.', error);
  }
};

export const findMindmap = async () => {
  try {
    const response = await fetch(API_PATH.MINDMAP.find(TEMP_ID), {
      method: 'GET',
    });
    const mindmap: mindmapInfo = await response.json();
    return mindmap;
  } catch (error) {
    console.error('가이드라인을 찾는데 실패했습니다.', error);
  }
};
