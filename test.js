function findRides(A, B, C) {
    //this is default OUTPUT. You can change it.
    var result = 0;

    //write your Logic here:
    let resultA = Math.floor(A / C);
    A = A % C;
    let resultB = Math.floor(B / C);
    B = B % C;

    // console.log(A, B);
    // console.log(resultA, resultB)
    // console.log(A,B,C, result);

    let max = 0;
    let min = 0;
    if (A + B >= C) {
        if (A > B) {

            max = A;
            min = B;
        } else {
            max = B;
            min = A;
        }
        // return result = `${result} ${max-min}`;
    }
    // console.log(resultA, resultB, parseInt((max+min)/C))
    result = `${resultB + resultA + (parseInt((max+min)/C))} ${parseInt((max+min)/C)}`
    return result;
}

var A = 5673;
var B = 9835;
var C = 437;

console.log(findRides(A,B, C));