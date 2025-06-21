function isDomain(str) {
  return /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,11}$/.test(str);
}
console.log(isDomain("example.com")); // true
