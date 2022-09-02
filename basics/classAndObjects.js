class Person {
    #age;

    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.#age = age;
        // can't declare as below
        // this.#dob = dob;
    }

    static countryCode = "+91";

    getUserName() {
        return this.name;
    }

    static getCountryCode() {
        return this.countryCode;
    }

    get mail() {
        return this.email;
    }

    get userAge() {
        return this.#age;
    }
 }

 let person = new Person("Darshan", "darshan@gmail.com", 26);
 console.log(person.name);
 console.log(person.getUserName());

 console.log(Person.countryCode);
 console.log(Person.getCountryCode());

//  when using get/set keyword you don't have to use () when calling them
 console.log(person.mail);

//  console.log(person.age);
console.log(person.userAge);