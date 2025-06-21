function extractUniqueCharacters(str) {
    const uniqueChars = new Set(str);

    return Array.from(uniqueChars).join('');
}

const inputString = "thequickbrownfoxjumpsoverthelazydog";
const uniqueCharacters = extractUniqueCharacters(inputString);
console.log(uniqueCharacters); 