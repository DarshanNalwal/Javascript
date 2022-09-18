findSum([1,2,5,3,6,4,8,9,4], 4);

function findSum(numArr, k){

    let max = 0;
    let sum = 0;
    for(let i = 0; i < numArr.length; i++) {
        if(i < k) {
            sum += numArr[i];
        } else {
            sum -= numArr[i-k];
            sum += numArr[i];
        }
        if(sum > max) {
            max = sum;
        }
        console.log(sum, max);
    }
    console.log(max);
}