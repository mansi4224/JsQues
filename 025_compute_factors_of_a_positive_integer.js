function positiveIntergerFactors(n) {
  if (n <= 0) {
    return "Input must be a positive integer.";
  }
  
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  
  return factors;
}
console.log(positiveIntergerFactors(12)); // [1, 2, 3, 4, 6, 12]