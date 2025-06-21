function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function printFibs(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibs(10); // Output: 0 1 1 2 3 5 8 13 21 34
