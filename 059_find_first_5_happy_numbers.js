function isHappy(num) {
  let seen = [];

  while (num !== 1) {
    if (seen.includes(num)) {
      return false; // Loop found
    }

    seen.push(num);

    let digits = num.toString().split("");
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
      let digit = parseInt(digits[i]);
      sum += digit * digit;
    }

    num = sum;
  }

  return true; // If we reach 1, it's a happy number
}

// Print the first 5 happy numbers
let count = 0;
let number = 1;

while (count < 5) {
  if (isHappy(number)) {
    console.log(number);
    count++;
  }
  number++;
}
