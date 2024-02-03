import API_PATH from '@util/apiPath';

interface reportInfo {
  report: any;
}

export const createReport = async (userId: number) => {
  try {
    const response = await fetch(API_PATH.REPORT.create(userId), {
      method: 'GET',
    });
    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const report: reportInfo = await response.json();
    return report;
  } catch (error) {
    console.error('가이드라인 생성에 실패했습니다.', error);
  }
};

export const findReport = async (userId: number) => {
  try {
    const response = await fetch(API_PATH.REPORT.find(userId), {
      method: 'GET',
    });
    const report: reportInfo = await response.json();
    return report;
  } catch (error) {
    console.error('가이드라인을 찾는데 실패했습니다.', error);
  }
};
