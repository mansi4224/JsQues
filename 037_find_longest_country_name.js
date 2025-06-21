function LongestCountryName(countryList) {
    let longest = "";

    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].length > longest.length) {
            longest = countryList[i];
        }
    }

    return longest;
}
console.log(LongestCountryName(["Australia", "Germany", "United States of America", "Canada"])); // "United States of America"