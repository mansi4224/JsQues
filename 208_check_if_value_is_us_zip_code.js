function isUSZip(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}
console.log(isUSZip("12345-6789")); // true
