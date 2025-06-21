function isPerfectNumber(num) {
    if (typeof num !== "number" || num <= 0) {
        return "Please enter a positive number.";
    }
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
            console.log(`Divisor: ${i}, Current Sum: ${sum}`);
        }
    }

    return sum === num;
}

console.log(isPerfectNumber(6)); // true