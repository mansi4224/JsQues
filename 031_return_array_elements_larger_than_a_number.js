function findalllargerElement(arr,num){
    let res = []
    let array = arr.sort((a,b)=> a - b);
    for (let i = 0 ; i<array.length;i++){
        if(num <= array[i]){
            res.push(array[i])
        }else{
            continue
        }
    }
    return res
}

console.log(findalllargerElement([3,5,73,32,245,,35,63],70))