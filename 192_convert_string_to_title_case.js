function sentenceCase(str) {
  return str.toLowerCase().replace(/(^\w|\.\s*\w)/g, c => c.toUpperCase());
}
console.log(sentenceCase('PHP exercises. python exercises.')); // "Php Exercises. Python Exercises."
