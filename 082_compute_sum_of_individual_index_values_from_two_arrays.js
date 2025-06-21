function addIndexOfTwoArray(arr1,arr2){
    let res = [...arr1,...arr2]
    console.log(res)
    let temp = 0
    for(let i in res){
        temp = temp + res[i]
    }
    return temp
}

console.log(addIndexOfTwoArray([1,2,3,4],[5,6,7,8]))