function isValidURL(str) {
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/.test(str);
}
console.log(isValidURL("https://www.example.com")); // true
