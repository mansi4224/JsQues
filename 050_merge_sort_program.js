function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(a, b) {
  if (!a.length) return b;
  if (!b.length) return a;
  return a[0] < b[0]
    ? [a[0]].concat(merge(a.slice(1), b))
    : [b[0]].concat(merge(a, b.slice(1)));
}

let array = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(array)); // Output: [5, 7, 23, 32, 34, 62]
