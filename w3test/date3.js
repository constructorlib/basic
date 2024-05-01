/*

Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38

*/

var today = new Date();
var year = today.getFullYear();
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var month = today.getMonth();
var monthName = monthNames[month];
var day = today.getDate();

var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var daysOfWeek = daysOfWeek[today.getDay()];
console.log("Today is: " + daysOfWeek + ".");
// console.log(typeof today); // obj
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

// Convert hours to 12-hour format
var ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // Handle midnight (0 hours)

// Add leading zeros to minutes and seconds if they are single digit
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

var currentTime =
  "Current time is: " + hours + " " + ampm + " : " + minutes + " : " + seconds;

console.log(currentTime);
