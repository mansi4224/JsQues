function isAlphaDashUnderscore(str) {
  return /^[a-zA-Z-_]+$/.test(str);
}
console.log(isAlphaDashUnderscore("test_string-name")); // true
