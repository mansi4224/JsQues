function palindrome(str) {
    const rev = str.split('').reverse().join("")
    if (rev === str) {
        return rev
    }
    else{
        return ""
    }
}

function longestpalindromeInString(str) {
    const arr = str.split(" ")
    const res = {}

    for (let i in arr) {
        const len = arr[i];
        const rev = palindrome(arr[i]);
        res[arr[i]] = len.length
    }
    let maxValue = 0
    let maxkey = ""

    for(let key in res){
        if(res[key]>maxValue){
            maxValue = res[key]
            maxkey = key
        }
    }
    return maxkey
}


console.log(longestpalindromeInString("madam racecar level kayak civic radar")); // { madam: 'madam', racecar: 'racecar', level: 'level', kayak: 'kayak', civic: 'civic', radar: 'radar' }
