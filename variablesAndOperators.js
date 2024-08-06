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

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// constant (unchanging) variable
const i = "i";

// There is a widespread practice to use constants as aliases for
// difficult-to-remember values that are known before execution. Such constants
// are named using capital letters and underscores.
const COLOR_RED = "#F00";

console.log(a, b, c, d, e, f, g, h, i, COLOR_RED)