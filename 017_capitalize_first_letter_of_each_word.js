function captilizedFirstLetterOfEachWord(str) {
    const words = str.split(' ');

    for (let i in words) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        console.log(words[i]); 
    }

    return words.join(' '); // Join the words back into a sentence
}

console.log(captilizedFirstLetterOfEachWord("hello world")); // "Hello World"


// const str = "hello";
// console.log(str.charAt(0));  // 'h'
// console.log(str.charAt(1));  // 'e'
// console.log(str.charAt(4));  // 'o'
