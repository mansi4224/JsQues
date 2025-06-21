function allCompinationOfString (str){
    const combineString = [];
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.lenght;j++){
            combineString.push(str.slice(i,j+1));
        }
    }
    return combineString;
}

console.log(allCompinationOfString("abcde"));
