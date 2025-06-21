function isIP(str) {
  return /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(?!$)|$){4}$/.test(str);
}
console.log(isIP("192.168.1.1")); // true
