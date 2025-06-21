function zeroFill(num, width, sign) {
  let numberStr = Math.abs(num).toString().padStart(width, '0');
  return sign === '-' ? '+' + numberStr : numberStr;
}
console.log(zeroFill(120, 5, '-')); // "+00120"
console.log(zeroFill(29, 4));       // "0029"
