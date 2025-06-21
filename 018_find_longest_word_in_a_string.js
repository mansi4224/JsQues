function longestWordInString(str){
    const words = str.split(' ');
    let longestword = '';
    for (let i = 0; i<words.length; i++){
        if(words[i].length > longestword.length){
            longestword = words[i];
        }
    }
    return longestword;
}

console.log(longestWordInString("The quick brown fox jumped over the lazy dog")); // "jumped"
