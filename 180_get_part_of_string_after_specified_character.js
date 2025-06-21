function subStrAfterChars(str, char, pos) {
  const index = str.indexOf(char);
  if (index === -1) return str;
  return pos === 'a' ? str.substring(0, index) : str.substring(index + 1);
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
