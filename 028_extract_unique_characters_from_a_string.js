function unique(str) {
    const charCount = {};


    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }


    const uniqueChars = [];
    const duplicateChars = [];

    for (let key in charCount) {
        if (charCount[key] === 1) {
            uniqueChars.push(key);
        } else if (charCount[key] > 1) {
            duplicateChars.push(key);
        }
    }

    return {
        unique: uniqueChars,
        duplicate: duplicateChars
    };
}


console.log(unique("thequickbrownfoxjumpsoverthelazydog"))