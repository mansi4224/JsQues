function addingDashBetweenEvens(num) {
    const temp = num.toString().split("");
    console.log(temp);
    let res = ""
    for (let i in temp) {
        let prvdigit = Number(temp[i - 1])
        let curDigit = Number(temp[i])
        console.log(`prvdigit => ${prvdigit}`)

        if (prvdigit % 2 === 0 && curDigit % 2 === 0) {
            res += "-" + curDigit;
        } else {
            res += curDigit;
        }

    }
    return res
}

console.log(addingDashBetweenEvens("025468"));  
