var students = ["Kewal", "Darshan","Darsh","Kewal", "Aditya", "Bhavana", "Tikesh", "Joey"];

console.log(students.length);
console.log(students[0]);

// doesn't throw error
console.log(students[students.length]);

students[students.length] = "SomeName";

console.log(students);

// drawback of adding by index. Creates empty items in between
students[students.length + 1] = "SomeOtherName";
console.log(students[8]);
console.log(students);

// Better way of adding elements to array
students.push("Chandler");
console.log(students);

console.log();

// Remove last element from array
console.log("-------- Remove last element from array ----------");
console.log(students.pop());
console.log(students);

console.log();

// Remove middle element from array (removes only the element but space remains)
console.log("-------- Remove middle element from array ---------");
delete students[3];
console.log(students);

console.log();

// Remove elements without empty space
console.log("Remove elements without empty space");
console.log(students.shift());
console.log(students);

console.log(students.unshift());
console.log(students);


console.log();

// Convert array to string
console.log("-------- Convert array to string ----------");
console.log(students.join(""));
console.log(students.toString());

console.log();

// Concat multiple arrays
console.log("------ Concat multiple arrays -------")
var arr2 = ["McD" , "Starbucks"];
var arr3 = ["Mercedes" , "Audi"];
// any number of arrays can be passed
console.log(students.concat(arr2, arr3));

console.log();

// check if array contains given entry
console.log("----- Check if array contains given entry -----");
console.log(students.includes("Tikesh"));

console.log();

// sort an array
console.log("----- Sort an Array -----");
console.log(students.sort());

console.log();

// reverse array
console.log("----- Reverse array -----");
console.log(students.reverse());

console.log();

// Math operations
console.log("------ Math operations --------")
const num = [1,2,100,3,4,5,6];
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.min.apply(null, num));
console.log(Math.max.apply(null, num));

console.log();

// Iterate over array using forEach
console.log("------- Iterate over array using forEach -------");
students.forEach(function(name) {
    console.log(name);
});

console.log();

// Filter array
console.log("------- Filter array ---------");
const ages = [32,16,34,23,40];
const adults = ages.filter(checkAdult);
const minors = ages.filter(function(age) {
    return age < 18;
});

console.log(adults);
console.log(minors);

function checkAdult(age) {
    return age >= 18;
}

console.log();

// use of every and some
console.log("------ use of every and some -------")
const checkAge = [44,25,56,32,40];
const isAgeBelow18 = checkAge.every(checkAdult);
const areSomeBelow18 = ages.some(checkAdult);
console.log(isAgeBelow18);
console.log(areSomeBelow18);

console.log();

// indexOf and lastIndexOf
console.log("------ indexOf and lastIndexOf -------");
console.log(ages.indexOf(16));
console.log(ages.lastIndexOf(23));

console.log();