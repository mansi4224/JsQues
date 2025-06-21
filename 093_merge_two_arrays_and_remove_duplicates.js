function merge_array(arr1, arr2) {
  let merged = arr1.concat(arr2);
  
  let unique = [];
  
  for (let i = 0; i < merged.length; i++) {
    if (!unique.includes(merged[i])) {
      unique.push(merged[i]);
    }
  }
  
  return unique;
}
