function countOccurrences(str, letter) {
    let res = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (res[char]) {
            res[char] += 1;
        } else {
            res[char] = 1;
        }
    }

    return res[letter] || 0;
}
console.log(countOccurrences("w3resource.com", "o")); // 4