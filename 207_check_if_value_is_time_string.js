function isTime(str) {
  return /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/.test(str);
}
console.log(isTime("23:59")); // true
