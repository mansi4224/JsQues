function factorial(b){
    if(b === 0 || b === 1){
        return b;
    }
    return b* factorial(b - 1);
}

console.log(factorial(5)); // 120