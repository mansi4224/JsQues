function reverseNumber(num) {
    const reversedStr = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(reversedStr) * Math.sign(num);
}


function palindrome(str) {
    const rev = reverseNumber(str);
    if(rev === str){
        console.log("The number is a palindrome");
    }else{
        console.log("The number is not a palindrome");
    }
}
