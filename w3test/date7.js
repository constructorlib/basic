/*

Write a JavaScript program to compute the sum 
of three elements of a given array of integers of length 3.

*/

function sum_three(nums) {
  return nums[0] + nums[1] + nums[2];
}

function check_length(arr) {
  if (arr.length === 3) {
    console.log(sum_three(arr));
  } else if (arr.length < 3) {
    console.log("Array length less than 3");
  }
}
check_length([1, 2, 3]);
