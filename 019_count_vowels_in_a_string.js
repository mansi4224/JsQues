function countVowels(str) {
    if (typeof str !== 'string') {
        console.log("Please enter a valid string only.");
        return;
    }

    let count = 0;
    const vowels = 'aeiouyAEIOUY';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    console.log(`Vowel count: ${count}`);
}


//Checks if "world" exists in the string "Hello world" — it does
