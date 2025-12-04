console.log("----------------------------");
console.log("2. Variables & Data Types");

let message;
message = "Hello, World!";
console.log(message);

// Declaring multiple variables in one line 
let user = 'John', age = 25, messageUser = 'Hello';

// Use different lines for better readability

// Constant variable
const pi = 3.14;
// pi = 3.14159; // This will cause an error

// Uppercase constants

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.

// Such constants are named using capital letters and underscores.

// For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

let name = "Ilya";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name"}` ); // ?

console.log( `hello ${name}` ); // ?

console.log("----------------------------");