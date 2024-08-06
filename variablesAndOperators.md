# Variables and Operators

https://www.theodinproject.com/lessons/foundations-variables-and-operators

# Name the three ways to declare a variable

```js
let variable1 = 10;
const variable2 = "string";
var variable3;
```

# Which of the three variable declarations should you avoid and why?

```js
var variable
```
Because it is deprecated, has no block scope, and visibility is scoped to 
current function, or global, if declared outside function.

# What rules should you follow when naming variables?

The name must contain only letters, digits, or the symbols $ and _. The
first character must not be a digit.

# What happens when you add numbers and strings together?

If the binary + is applied to strings, it merges (concatenates) them.
```js
let s = "my" + "string";
alert(s); // mystring
```
If any of the operands is a string, then the other one is converted to a
string too.
```js
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```
Example of 3 are more operands: The first treats the first two operands as
numbers. The second example treats all the operands as strings.
```js
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
```

# How does the Modulo (%), or Remainder, operator work?

The result of a % b is the remainder of the integer division of a by b.
```js
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4
```

# Explain the difference between == and ===.

== tests whether the values are the same but not whether the values' datatypes
are the same.  
===  is a strict version that tests the equality of both the values and their 
datatypes. The strict versions tend to result in fewer errors.

# When would you receive a NaN result?

NaN is a JavaScript reserved word indicating that a number is not a legal 
number. Trying to do arithmetic with a non-numeric string will result in NaN 
(Not a Number):

```js
let x = 100 / "Apple"; // NaN
```

# How do you increment and decrement a number?

Increment `++` increases a variable by 1:  
```js
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
```
Decrement `--` decreases a variable by 1:
```js
let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1
```

# Explain the difference between prefixing and postfixing increment/decrement operators.

* When the operator goes after the variable, it is in “postfix form”: 
`counter++`.
    * The postfix form  also increments counter but returns the old value (prior
     to increment)
```js
let counter = 1;
let a = counter++;
alert(a); // 1
```
* The “prefix form” is when the operator goes before the variable: `++counter`.
    * The prefix form increments counter and returns the new value
```js
let counter = 1;
let a = ++counter;
alert(a); // 2
```
* If we’d like to increase a value and immediately use the result of the 
operator, we need the prefix form:
```js
let counter = 0;
alert( ++counter ); // 1
```

# What is operator precedence and how is it handled in JS?

Unary operators, then PEMDAS

# How do you access developer tools and the console?

Right-clicking on the blank webpage and selecting “Inspect” or “Inspect 
Element”. In the ‘Developer Tools’ pane find and select the ‘Console’ tab

# How do you log information to the console?

`console.log()` is the command to print something to the developer console

# What does unary plus operator do to string representations of integers? eg. +”10”

The unary plus or, in other words, the plus operator + applied to a single 
value, doesn’t do anything to numbers. But if the operand is not a number, the 
unary plus converts it into a number.

```js
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

// Both values converted to numbers before the binary plus
let apples = "2";
let oranges = "3";
alert( +apples + +oranges ); // 5
```