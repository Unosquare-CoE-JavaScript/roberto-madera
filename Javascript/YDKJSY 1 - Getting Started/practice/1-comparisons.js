/* ***COMPARISONS && COERCION PRACTICE*** */
/* 
  scheduleMeeting(..) should take a start time (in 24-hour format as a string “hh:mm”) and a meeting duration (number of minutes). 
  It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); 
  return false if the meeting violates the work day bounds.
*/

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  const meetingIndex = startTime.indexOf(":");

  let meetingHour = +startTime.slice(0, meetingIndex);
  let totalMinutes = +startTime.slice(meetingIndex + 1) + durationMinutes;

  if (totalMinutes >= 60) {
    meetingHour += Math.floor(totalMinutes / 60);
    totalMinutes -= 60 * Math.floor(totalMinutes / 60);
  }
  const meetingEnd = meetingHour * 100 + totalMinutes;

  if (
    getNumericTime(startTime) >= getNumericTime(dayStart) &&
    meetingEnd <= getNumericTime(dayEnd)
  ) {
    return true;
  }
  return false;
}

function getNumericTime(time) {
  const timeIndex = time.indexOf(":");
  const numericTime = +(time.slice(0, timeIndex) + time.slice(timeIndex + 1));

  return numericTime;
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false

/* BOOK SOLUTION */
/*

*/
