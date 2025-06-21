function findDate(str) {
  return str.match(/\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})\b/g);
}
console.log(findDate("Today's date is 2025-06-21.")); // ["2025-06-21"]
