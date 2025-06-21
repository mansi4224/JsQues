function generateRandomString(){
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let res = ''
    for (let i = 0;i<char.length;i++){
        res += char.charAt(Math.floor(Math.random() * char.length + 1))
    }
    return res;
}

console.log(generateRandomString())