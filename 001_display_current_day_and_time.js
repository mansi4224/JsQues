function day_time (){
    const todat = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayName = days[todat.getDay()];
    const hours = todat.getHours();
    const minutes = todat.getMinutes();
    const seconds = todat.getSeconds();
    const formattedTime = `${dayName} ${hours}:${minutes}:${seconds}`;
    console.log(formattedTime);
    return formattedTime;
}
console.log(day_time())
