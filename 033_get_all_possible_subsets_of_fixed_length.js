function arraySubset(arr){
    let res = []
    for(let i=0;i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
            res.push([arr[i],arr[j]])
        }
        res.push(arr)
    }
    return res
}

console.log(arraySubset([1,2,3]))