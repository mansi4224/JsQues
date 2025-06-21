function removeuniqueChar(string){
    let unique = '';
    for(let i in string){
        if(!unique.includes(string[i])){
            unique += string[i];
        }
    }
    return unique;
}

console.log(removeuniqueChar('hello world'));