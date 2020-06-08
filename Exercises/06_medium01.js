/* eslint-disable max-lines-per-function */
function getFirstWeekdayDate(startingDate, dayOfFirstDate, dayOfFindingDate) {
  if (dayOfFirstDate <= dayOfFindingDate) {
    return startingDate + dayOfFindingDate - dayOfFirstDate;
  } else return startingDate + dayOfFindingDate - dayOfFirstDate + 7;
}

function dateValidation(yearNum, monthNum, dateNum) {
  const monthStart = new Date(yearNum, monthNum, 1);
  const monthEnd = new Date(yearNum, monthNum + 1, 1);
  const resultDate = new Date(yearNum, monthNum, dateNum);
  return resultDate > monthStart && resultDate < monthEnd;
}

function meetupDay(yearNum, monthNum, weekday, order) {
  const weekdayConversion = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const orderConversion = {
    "1st": 0,
    "2nd": 7,
    "3rd": 14,
    "4th": 21,
    "5th": 28,
    // eslint-disable-next-line quote-props
    last: 28,
  };

  const weekdayNum = weekdayConversion[weekday];
  const monthStart = new Date(yearNum, monthNum, 1);

  // 1st, 2nd, 3rd, 4th, 5th or last...
  if (Object.keys(orderConversion).includes(order)) {
    const firstWeekday = getFirstWeekdayDate(
      1,
      monthStart.getDay(),
      weekdayNum
    );
    let dayToFind = firstWeekday + orderConversion[order];
    if (order === "last" && !dateValidation(yearNum, monthNum, dayToFind)) {
      dayToFind -= 7;
    }
    if (order === "5th" && !dateValidation(yearNum, monthNum, dayToFind)) {
      throw new Error("Invalid date!");
    }
    return new Date(yearNum, monthNum, dayToFind);
  }
  const ThirteenthDate = new Date(yearNum, monthNum, 13);
  const dateWithinTeenth = getFirstWeekdayDate(
    13,
    ThirteenthDate.getDay(),
    weekdayNum
  );
  return new Date(yearNum, monthNum, dateWithinTeenth);
}

module.exports = meetupDay;

// last -> get 5th, and check date validation. If not, then 4th is the last.
// teenth -> between 13-19. Check the weekday of the 13th. Calculate from there.

// in general

// get the weekday of the first day of that month.
// (get the number = DayOfFirstDate)
// get the number of the required weekday (get the number = DayOfFindingDate)

// if DayOfFirstDate < DayOfFindingDate (입력은 요일 표시 숫자, 출력은 날짜)
//    1 + DayofFindingDate - DayOfFirstDate -> first weekday of the month
// if DayOfFirstDate > DayOfFindingDate
//    1 + DayofFindingDate - DayOfFirstDate + 7 -> first weekday of the month

// teenth
// get the weekday of the 13th day of that month
// same logic applies

//startingDate to be 1 for 1st, 2nd...
//startungDate to be 13 for teenth...
