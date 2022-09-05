// block scope
{
    let x = 2;
}
// cannot access x here
// console.log(x);

{
    var x = 2;
}
// can access x here
console.log(x);

// Local and global scope

var a = 4; // global scope
let z = 20;
function functionName() {
    var y = 3; // functional scope
    // can access "a" here
    console.log("a "+a);

    let z = 10;
    console.log("z "+z); // local over global scope
}

console.log("z before function call "+z);
functionName();

console.log("z after function call "+z);

// cannot access "y" here
// console.log("y "+y);

function fun1() {
    var i = 1;
    fun2();
}

function fun2() {
    // cannot access "i"
    // console.log(i);
    console.log();
}

fun1();


function func1() {
    var t = 20; 
    func2();
    x = 40;
}

function func2() {
    console.log(t);
}

// t = 40;
func1();