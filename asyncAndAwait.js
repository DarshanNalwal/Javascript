async function foo() {
    let promise = new Promise(function (resolve, reject) {
        resolve("Done");
    });

    let result = await promise;
    return result;
}

foo().then(
    (result) => console.log(result),
    (error) => console.log(error.message)
);