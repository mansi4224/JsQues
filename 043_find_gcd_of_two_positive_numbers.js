// function greatest_common_divisor(n) {
//     const allDivisor = []
//     for (let i = 1; i <=n; i++) {
//         if(n % i == 0){
//             allDivisor.push(i)
//         }
//     }
//     const res = allDivisor.sort()
//     return res[1]
// }

// console.log(greatest_common_divisor(5))


function greatest_common_divisor(n,m){
    if(n === 0){
        return n
    }
    return greatest_common_divisor(m,n%m)
}