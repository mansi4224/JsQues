function isUKPostCode(str) {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(str);
}
console.log(isUKPostCode("EC1A 1BB")); // true
