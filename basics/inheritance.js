// Prototypal inheritace
let Car = {
    colour: "Red"
};

let BMW = {
    make: "BMW"
};

BMW.__proto__ = Car;
console.log(BMW.colour +" "+ BMW.make);

// Pseudoclassical inheritance
function Cars(make, colour, speed) {
    this.make = make;
    this.colour = colour;
    this.speed = speed;
}

let Toyota = new Car("Toyota", "Red", "100mph");

Cars.prototype.dialogue = function() {
    console.log("The car is "+this.make);
}

console.log(Toyota.dialogue);



// Functional inheritance
function Person(data){
    var that = {};
    that.name = data.name;
    return that;
}

function Employee(data) {
    var that = Person(data);
    that.sayHello = function() {
        return "Hello, I'm "+that.name;
    };
}
var myEmployee = Employee({name:"Rufi"});
console.log(myEmployee.sayHello());