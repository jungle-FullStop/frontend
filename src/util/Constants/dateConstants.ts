//현재 날짜와 시각을 나타내는 클래스 생성
const currentDate: Date = new Date();
// console.log(currentDate)

//현재 시각 기준 연도, 달, 1일 (만약 지금이 2023년 1월 26일이면 2023년 1월 1일 생성)
const firstDayMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// console.log(firstDayMonth);

//현재 시각 기준 연도, 다음 달, 1일 (만약 지금이 2023년 1월 26일이면 2023년 2월 1일 생성)
const firstDayNextMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
// console.log(firstDayNextMonth)

//현재 시각 기준 연도, 달, 마지막 일 (만약 지금이 2023년 1월 26일이면 2023년 1월 31일 생성)
const lastDayMonth: Date = new Date(firstDayNextMonth.getTime() - 1);
// console.log(lastDayMonth);

//현재 마지막 달 시각을 0시 0분 0초로 초기화. 어차피 날짜만 필요하고 시각은 필요 없음
lastDayMonth.setHours(0, 0, 0, 0);

//현재 달의 시작과 끝을 담을 배열
export const dateRange: string[] = [];

//쳣째 날이 마지막 날과 같아질 때까지 모든 날을 dateRange에 담음
while (firstDayMonth <= lastDayMonth) {
  const dateString = firstDayMonth.toDateString();
  dateRange.push(dateString);
  firstDayMonth.setDate(firstDayMonth.getDate() + 1);
}
