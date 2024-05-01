// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

var y = new Date();
var year = y.getFullYear();

function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
console.log(leapyear(2018));
console.log(leapyear(2020));
console.log(leapyear(2024));
