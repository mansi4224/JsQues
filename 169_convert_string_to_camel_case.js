function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
    index === 0 ? word.toUpperCase() : word.toUpperCase()
  ).replace(/\s+/g, '');
}
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScript exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScriptExercises"));  // "JavaScriptExercises"
