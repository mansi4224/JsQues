function getType(value) {
    return typeof value;
}


console.log(getType("hello"));     // "string"
console.log(getType(123));         // "number"
console.log(getType(true));        // "boolean"
console.log(getType(undefined));   // "undefined"
console.log(getType({}));          // "object"
console.log(getType(function() {})); // "function"
