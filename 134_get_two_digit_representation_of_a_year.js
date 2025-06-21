function sort_year(dt) {
  return String(dt.getFullYear()).slice(-2);
}

const dt2 = new Date(1989, 10, 1);
console.log(sort_year(dt2)); // "89"
