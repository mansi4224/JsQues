function insert(original, insertStr, position = 1) {
  return original.slice(0, position) + insertStr + original.slice(position);
}
console.log(insert('We are doing some exercises.')); // "We are doing some exercises."
console.log(insert('We are doing some exercises.','JavaScript ')); // "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.','JavaScript ',18)); // "We are doing some JavaScript exercises."
