function capitalize_Words(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
