function sortitemOfArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i+1; j++) {
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sortitemOfArray([4, 2, 1, 6, -1, -4, 33, 6, -2]))