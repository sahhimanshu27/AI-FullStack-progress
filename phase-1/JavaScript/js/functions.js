console.log("----------------------------");
console.log("5. Functions");

// Function declaration
function showMessage() {
    console.log("Hello, this is a message!");
}
showMessage();

// Function with parameters
function greetUser(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetUser("Alice", 30);

// Function with return value
function sum(a, b) {
    return a + b;
}
let result = sum(5, 10);
console.log(`The sum is: ${result}`);


// Age verification function
// Shown when the page first loads
// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let ageFunc = 7;
  
//   if ( checkAge(ageFunc) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

// Default parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log(`Multiplication result: ${multiply(5)}`); // b defaults to 2



console.log("----------------------------");