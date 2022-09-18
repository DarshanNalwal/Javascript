/* Hoisting always put all declarations (be it variable or functions, 
    except let and const) at the top */

console.log(a);
// console.log(z); undeclared gives error
var a = 10;
var x = 20;
    
// console.log(y); gives error
let y = 0;
const b = 1;
console.log(y);
console.log(b);

// Throws Uncaught TypeError as we can't change value for const
b = 2;