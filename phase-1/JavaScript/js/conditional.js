console.log("----------------------------");
console.log("4. Conditional Statements");

// Conditional operator'?'

let ageConditional = 20;
let accessAllowed = (ageConditional > 18) ? true : false;
console.log(accessAllowed);

let messageConditional = (ageConditional < 3) ? 'Hi, baby!' :
  (ageConditional < 18) ? 'Hello!' :
  (ageConditional < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(messageConditional);

// Switch statement
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}

console.log("----------------------------");