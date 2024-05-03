/*

Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

*/

var far = 140;
var far2 = 45;
function convert(value) {
  return (value - 32) / 1.8;
}

console.log(
  "Fahrenheit value is: " + far + "°F" + " or " + convert(far) + "°C."
);

console.log(
  "Fahrenheit value is: " + far2 + "°F" + " or " + convert(far2) + "°C."
);
