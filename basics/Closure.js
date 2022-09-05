// ------------ Closure --------------
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable){
        console.log(`outerVariable :: ${outerVariable}`);
        console.log(`innerVariable :: ${innerVariable}`);
    };
}
const func = outerFunction("outside");

/* This function having access to it's parent variable is called "Closure"
    this is specifically true with functions. Parent variable is kept 
    alive until all child functions are complete.
 */
func("inside");


function createEmployeeID() {
    var prefix = "employee";
    return generateID = function() {
        for(let i =0; i < 5; i++) {
            console.log(prefix+i);
        }
    }
}

var print = createEmployeeID();
print();