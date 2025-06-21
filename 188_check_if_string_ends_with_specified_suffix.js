function string_endsWith(str, suffix) {
  return suffix !== '' && str.endsWith(suffix);
}
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // true
console.log(string_endsWith('JS PHP PYTHON', ''));       // false
