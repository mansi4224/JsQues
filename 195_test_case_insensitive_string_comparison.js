function compare_strings(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log(compare_strings('abcd', 'AbcD')); // true
console.log(compare_strings('ABCD', 'Abce')); // false
