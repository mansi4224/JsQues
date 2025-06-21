function rotateString(txt) {
    console.log(`Given string: ${txt}`);
    const len = txt.length;
    for (let i = 0; i < len; i++) {
        let rotated = txt.slice(i) + txt.slice(0, i);
        console.log(`Rotated string ${i + 1}: ${rotated}`);
    }
}

console.log(rotateString("abcd"))
