function isHex(str) {
  return /^0x[0-9a-f]+$/i.test(str);
}
console.log(isHex("0x1A3F")); // true
