function longestUniqueSubstring(str) {
  let longest = "";
  
  for (let i = 0; i < str.length; i++) {
    let current = "";

    for (let j = i; j < str.length; j++) {
      if (current.includes(str[j])) break;
      current += str[j];
      console.log(`Current substring: ${current}`);
    }

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}


console.log(longestUniqueSubstring("abcabcbb")); // "abc"




// current = current.slice(current.indexOf(char) + 1); this will remove all characters before the first occurrence of char, including char itself.
