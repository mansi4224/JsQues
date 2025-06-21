function find_most_frequent_item_of_an_array(arr) {
    let count = {}

    for (i in arr) {
        if (count[i]) {
            count[i]++
        }
        else {
            count[i] = 1
        }
    }
    let maxValue = 0
    let maxKey = null
    for(let i in count){
        if(count[key]>maxValue){
            maxValue = count[key]
            maxKey = key
        }
    }
    return maxValue
}

console.log(find_most_frequent_item_of_an_array([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))