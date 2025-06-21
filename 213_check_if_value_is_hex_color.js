function isHexColor(str) {
  return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(str);
}
console.log(isHexColor("#fff")); // true
console.log(isHexColor("123abc")); // true
