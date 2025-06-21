function countWords(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').filter(Boolean).length;
}
console.log(countWords("  Hello   world \n and everyone  ")); // 4
