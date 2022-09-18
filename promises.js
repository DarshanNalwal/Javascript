let promise = new Promise((resolve, reject) => {
    if(1 < 0) {
        resolve("This is working!");
    } else {
        reject("It failed!");
    }
});

// promise.then(
//     (result) => console.log(result),
//     (error) => console.log(error)
// );

promise.then((result) => console.log(result));
promise.catch((error) => console.log(error));
promise.finally(() => console.log("Code finished execution"));