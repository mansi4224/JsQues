function binarySearch(arr, target) {
    low = 0
    high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor(arr.length / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2