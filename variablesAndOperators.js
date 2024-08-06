////////////////////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////////////////////

// declaring a variable then assigning a string
let a;
a = "a";

// assign on single line
let b = "b";

// assign variable, multi-line
let c = "c"
  , d = "d"
  , e = "e";

// change variable data
let f = "f";
f = "ff";

// copy data from one variable to another
let g = "g";
let h = g;

console.log(a, b, c, d, e, f, g, h);

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// constant (unchanging) variable
const i = "i";

// There is a widespread practice to use constants as aliases for
// difficult-to-remember values that are known before execution. Such constants
// are named using capital letters and underscores.
const COLOR_RED = "#F00";

console.log(i, COLOR_RED)

////////////////////////////////////////////////////////////////////////////////
// OPERATORS
////////////////////////////////////////////////////////////////////////////////

let addition = 6 + 9;
let subtraction = 20 - 15;
let multiplication = 3 * 7;
let division = 10 / 5;
let modulo = 8 % 3;
let exponent = 5 ** 2;

console.log(addition, subtraction, multiplication, division, modulo, exponent)

// Using variables for math
j = addition + (subtraction - multiplication) * division % modulo ** exponent;
console.log(j);

// Increment & decrement
let num1 = 4;
num1++;

let num2 = 6;
num2--;
num2;

console.log(num1, num2)

// Assignment operators +=, -=, *=, /=
// eg. short for x = x + 4
let additionAssignment = 4;
additionAssignment += 4;
console.log(additionAssignment)

////////////////////////////////////////////////////////////////////////////////
// USEFUL NUMBER METHODS
////////////////////////////////////////////////////////////////////////////////

// toFixed() - Round number to fixed decimal
const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

// Number() - Converting to number data types
let myNumber = "74";
console.log(typeof(myNumber));

myNumber = Number(myNumber) + 3;
console.log(typeof(myNumber));
