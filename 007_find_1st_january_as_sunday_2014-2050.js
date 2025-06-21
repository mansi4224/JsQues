function toFindMonday(){
    const startYear = 2014;
    const endYear = 2050;
    const firstJanuarySundays = [];
    for (let year= startYear; year <= endYear; year++) {
        const date = new Date(year, 0, 1); 
        if (date.getDay() === 0) { 
            firstJanuarySundays.push(year);
        }
    }
    console.log(`Years from ${startYear} to ${endYear} where 1st January is a Sunday:`);
    return firstJanuarySundays;
}
