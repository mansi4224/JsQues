function isAlphaNumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}
console.log(isAlphaNumeric("abc123")); // true
