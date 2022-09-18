let promise1 = new Promise((resolve, reject) => {
    if(1 >= 0) {
        resolve("Success 1");
    } else {
        reject("Error 1");
    }
});
let promise2 = new Promise((resolve, reject) => {
    if(1 >= 0) {
        resolve("Success 2");
    } else {
        reject("Error 2");
    }
});
let promise3 = new Promise((resolve, reject) => {
    if(1 == 0) {
        resolve("Success 3");
    } else {
        reject("Error 3");
    }
});

// Will execute result if all promises are fulfilled
Promise.all([promise1, promise2, promise3]).then(
    (result) => console.log(result),
    (error) => console.log(error)
);


let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "first");
});

let promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});

// Whichever is fulfilled first
Promise.race([promise4, promise5]).then(
    (result) => console.log(result),
    (error) => console.log(error)
);

Promise.any([promise1, promise2, promise3]).then(
    (result) => console.log(result),
    (error) => console.log(error)
);