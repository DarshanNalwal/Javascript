/* User defined types (Arrays and Objects) are pass by reference,
   hence, updating will result in source data modification. 
   This is only for Objects and Arrays. */
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    address: {
        building: "Villa Apartments",
        road: "Rue La Roi",
        city: "Paris"
    }
};

console.log(person["firstName"]);
console.log(person.firstName);
console.log(person.getFullName());

console.log();

person["phone"] = 9876543210;
person.email = "john@gmail.com";

for(var prop in person) {
    console.log(person[prop]);
}

// generally not used
delete person.phone;

console.log(person);

console.log(hasOwnProperty.call(person, "email"));

console.log(person["something"] != undefined);