function FirstNotRepeatedChar(str){
    let charCount = {}

    for(let i=0;i<str.length;i++){
        const char = str[i]
        if(charCount[char]){
            charCount[char] += 1
        }else{
            charCount[char] = 1
        }
    }

   for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
}
console.log(FirstNotRepeatedChar("abacddbec")) 