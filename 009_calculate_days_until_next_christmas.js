function toDetermineDayLeftForChristmasUntilNextChristmas() {
    const today = new Date();
    const christmasthisyear = new Date(today.getFullYear(), 11, 25);
    console.log(`Today's date: ${today.toDateString()}`);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        return `Christmas has already passed this year. There are ${365 - (today - christmasthisyear) / (1000 * 60 * 60 * 24)} days left until next Christmas.`;
    }
}

console.log(toDetermineDayLeftForChristmasUntilNextChristmas());
