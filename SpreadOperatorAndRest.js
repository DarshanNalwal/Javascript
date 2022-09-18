const person = {
    name: "John",
    lastName: "Doe",
    age: 27
}

person.age = 35;
console.log(person.age);
person.dob = "04/04/1996";

console.log(person.dob);

let cars = ["mercedes", "audi"];
let cars2 = [...cars]; //Spread Operator (works only on iterable types)
cars.push("Tata");
console.log(cars);
console.log(cars2);

let cars3 = ["pagani", ...cars];
let cars4 = ["pagani", cars];
console.log(cars3);
console.log(cars4);

let fun = (...numbers) => console.log(numbers.length); // Rest Parameters

fun(10,2,6,7);
fun(1);
fun(20,32);

let score = [122,27,124];
console.log(Math.max(...score));