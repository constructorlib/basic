function error_handler(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return "Not a number!";
  } else {
    return "Not a number!";
  }
}

console.log(error_handler(1, 2));
console.log(error_handler(1, "a"));
