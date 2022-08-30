// named function
function sum(num1, num2, num3) {
    console.log(arguments[0] + arguments[1] + arguments[2]);
}

sum(5,8,8);

// anonymous function
var a = function (num1, num2, num3) {
    console.log(arguments[0] + arguments[1] + arguments[2]);
};

a(5,8,8);

var y = function (x) {
    return x * x;
}

console.log(typeof y(3), typeof(y("A")));