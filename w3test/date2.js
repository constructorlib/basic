/*

Write a JavaScript function to get the current date.
Note : Pass a separator as an argument.

Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"

*/

function curday(separator) {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month}${separator}${day}${separator}${year}`;
}

// Test Data
console.log(curday("/")); // Output: "11/13/2014"
console.log(curday("-")); // Output: "11-13-2014"
