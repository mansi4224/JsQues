function search_word(str, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = str.match(regex);
  return `'${word}' was found ${matches ? matches.length : 0} times.`;
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
