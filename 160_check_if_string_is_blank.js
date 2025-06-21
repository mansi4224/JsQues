function isStringBlank(str){
    if(typeof str === "String"){
        if(str.length == 0){
            return "String is empty"
        }
        else{
            return "Please input string"
        }
    }
}

console.log(isStringBlank('shashwt'))