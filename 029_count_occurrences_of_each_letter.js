function countOccurrences(str){
    const charCount = {};

    for (let i =0 ;i < str.length;i++){
       const char = str[i];
       if (charCount[char]) {
        charCount[char] += 1;
       } 
       else {
        charCount[char] = 1;
       }
    }
    return charCount;
}

console.log(countOccurrences("thequickbrownfoxjumpsoverthelazydog"));