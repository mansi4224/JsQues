function isCanadaPostCode(str) {
  return /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i.test(str);
}
console.log(isCanadaPostCode("K1A 0B1")); // true
