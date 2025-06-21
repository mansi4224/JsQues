function SecondLowestAndGreatest(arr) {
    const num = arr.sort((a,b)=> a - b);
    const secondLargest = num[num.length - 2]
    const scondGrested = num[1];
    return [secondLargest, scondGrested];
}

console.log(SecondLowestAndGreatest([1, 2, 3, 4, 5])); 


// Arrow function is used to sort array in ascending order.
// Compare 40 and 100 → 40 - 100 = -60 → 40 stays before 100 

// Compare 1 and 5 → 1 - 5 = -4 → 1 stays before 5 

// Compare 100 and 10 → 100 - 10 = 90 → 10 moves before 100 

