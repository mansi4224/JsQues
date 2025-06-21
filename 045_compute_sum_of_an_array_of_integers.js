function sum_of_array(arr,index = 0){
    if(index>=arr.length){
        return 0;
    }
    return arr[index] + sum_of_array(arr,index + 1)
}

console.log(sum_of_array([1,2,3,4,5]))