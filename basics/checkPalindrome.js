function checkPalindrome(str) {
    str = str.toUpperCase();
    let arr = str.split("");
    let revArr = arr.reverse();
    console.log(str == revArr.join(""));
}

checkPalindrome("Madam");