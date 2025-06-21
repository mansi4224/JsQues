function longest_common_starting_substring(arr) {
  if (arr.length === 0) return "";
  
  let firstStr = arr[0]; 

  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== firstStr[i]) {
        return firstStr.slice(0, i); 
      }
    }
  }

  return firstStr;
}

console.log(longest_common_starting_substring(['goo', 'gogle','goohjh']))