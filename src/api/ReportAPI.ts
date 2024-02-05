import API_PATH from '@util/apiPath';

export const createReport = async () => {
  try {
    const response = await fetch(API_PATH.REPORT.create(), {});
    return await response.json();
  } catch (error) {
    console.error('가이드라인 생성에 실패했습니다.', error);
  }
};

export const findReport = async () => {
  try {
    const response = await fetch(API_PATH.REPORT.find(), {});
    return await response.json();
  } catch (error) {
    console.error('가이드라인을 찾는데 실패했습니다.', error);
  }
};
