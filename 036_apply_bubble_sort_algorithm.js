function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j = 0;j<i+1;j++){
            if(arr[i] > arr[j]){
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]