function reverseNumber(num) {
    let reversed = 0;
    const sign = Math.sign(num);
    num = Math.abs(num);

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
        console.log(reversed)
    }

    return reversed * sign;
}

console.log(reverseNumber(1234))
