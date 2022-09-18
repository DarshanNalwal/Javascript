console.log("Execution Started");

// This is handled in background by webapi
setTimeout(function() {
    console.log("After 5 sec break");
}, 5000);

console.log("Execution Ended"); 

// Passing a function as a parameter into another function or returning 
// a function from a function is HOF (Higher Order Function)


// Callback
let add = function(num1, num2, callback) {
    let result = num1+num2;
    callback(result);
};

let display = function(answer) {
    console.log(`The sum is ${answer}`);
};

add(2,3,display);

// repeated nested callback use results in "Callback Hell" or "Pyramid of Doomand"

function findEvenOdd(num, callback) {
    if(num % 2 == 0){
        callback(num, "even");
    } else {
        callback(num, "odd");
    }
}

var print = function(num, result) {
    console.log(`The given number ${num} is ${result}`);
};

findEvenOdd(print);

// String duplication program
var string = "ABC";
var newString = "";
for(var x =0;x<string.length;x++) {
    newString = newString+string[x]+string[x];
}
console.log(newString);