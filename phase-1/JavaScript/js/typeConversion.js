console.log("----------------------------");
console.log("3. Type Conversion");

// String Conversion
let value = true;
console.log(typeof value); // boolean
value = String(value); // now value is a string "true"
console.log(typeof value); // string

// Numeric Conversion
let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes the number 123
console.log(typeof num); // number

let ageCon = Number("an arbitrary string instead of a number");
console.log(ageCon); // NaN, conversion failed

// Boolean Conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

console.log("----------------------------");