/* Write a JS program to compare two objects to determine if the first
one contains equivalent peroperty values to the second one. */

var objMatches = (obj, source) => { // if using {} then explictly return 
    return Object.keys(source).every(
        (key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }
    ) 
}

var result = objMatches(
    {
        name:"Darshan",
        age: 27,
        number: 1234567890,
        city: "Bangalore"
    },
    {
        number: 1234567890,
        city: "Bangalore",
        some: "abc"
    }
);

console.log(result);


