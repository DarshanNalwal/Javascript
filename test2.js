function minimumCharacteristic(N, A, B) {
    //this is default OUTPUT. You can change it.
    var result = 0;
    //write your Logic here:
    A.sort().reverse();
    B.sort();
    // console.log(A);
    // console.log(B);
    for (let i = 0; i < N; i++) {
        result += (A[i] * B[i]);
    }
    return result;
}

var N = 3;
var A = [1,2,3];
var B = [3,1,2];

console.log(minimumCharacteristic(N,A,B));