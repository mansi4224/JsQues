function armstrong(num) {
  let number = num.toString().split(""); 
  let sum = 0;

  for (let i in number) {
    let digit = Number(number[i]); 
    sum += digit ** 3; 
  }

  return sum === num; 
}


console.log(armstrong(371)); 
console.log(armstrong(123));
