//현재 날짜와 시각을 나타내는 클래스 생성
const currentDate: Date = new Date();
// console.log(currentDate)

//현재 시각 기준 연도, 달, 1일 (만약 지금이 2024년 1월 26일이면 2024년 1월 1일 생성)
const firstDayMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

//현재 시각 기준 연도, 다음 달, 1일 (만약 지금이 2024년 1월 26일이면 2024년 2월 1일 생성)
const firstDayNextMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
// console.log(firstDayNextMonth)

//현재 시각 기준 연도, 달, 마지막 일 (만약 지금이 2024년 1월 26일이면 2024년 1월 31일 생성)
const lastDayMonth: Date = new Date(firstDayNextMonth.getTime() - 1);
// console.log(lastDayMonth);

//현재 마지막 달 시각을 0시 0분 0초로 초기화. 어차피 날짜만 필요하고 시각은 필요 없음
lastDayMonth.setHours(0, 0, 0, 0);

//현재 달의 시작과 끝을 담을 배열
let dateRange: string[] = [];

//쳣째 날이 마지막 날과 같아질 때까지 모든 날을 dateRange에 담음
while (firstDayMonth <= lastDayMonth) {
  // 한국식으로 날짜 포맷팅
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  };

  const dateString = new Intl.DateTimeFormat('ko-KR', options).format(firstDayMonth);

  //dateRange에 날짜 담는 중
  dateRange.push(dateString);
  firstDayMonth.setDate(firstDayMonth.getDate() + 1);
}

//현재 달에서 첫번 째 날이 무슨 요일인지 알기 위해 date객체 생성. 위에 FirstDayMonth 객체는 while문 돌면서 값이 바뀌었으므로 사용 불가해서 새로 만듦
const copyFirstDayMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

//현재 달이 무슨 요일인지 확인하는 변수. 일요일(0) ~ 토요일 (6) 까지 number 값을 가짐
let dateCnt = copyFirstDayMonth.getDay();

//dateRange의 매달 1일이 무슨 요일인지에 따라 0을 추가함 ex) 이번 달 1일이 목요일이면 dateCnt의 값이 4이므로 dateRange에 4개의 0을 추가
while (dateCnt > 0) {
  dateRange = ['0', ...dateRange];
  dateCnt--;
}

function getDaysInMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = [];

  for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
    daysInMonth.push(new Date(day));
  }

  return daysInMonth;
}

const today = new Date(); // 현재 날짜
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

export { dateRange, copyFirstDayMonth, daysInCurrentMonth };
