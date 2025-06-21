function br_search(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return br_search(arr, target, start, mid - 1);
  return br_search(arr, target, mid + 1, end);
}

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(br_search(arr, 5)); // Output: 5
