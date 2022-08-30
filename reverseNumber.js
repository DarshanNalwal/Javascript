function reverseNumber(x) {
    let stringNumber = x.toString();
    // console.log(typeof stringNumber);
    
    let strArr = stringNumber.split("");
    let revNumArr = strArr.reverse();
    return revNumArr.join("");
}

console.log(reverseNumber(321465));