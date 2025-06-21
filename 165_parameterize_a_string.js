function string_parameterize(str) {
  return str.toLowerCase().replace(/[^\w\s]/g, '').trim().replace(/\s+/g, '-');
}
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
