function alphaticalOrder(str) {
    const sortedStr = str.split('').sort().join('');
    return sortedStr;
}
console.log(alphaticalOrder("webmaster")); // abeemrstw
