function celsiusfahrenheit() {
    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
    return fahrenheit;
}

function fahrenheitcelsius() {
    let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is equal to ${celsius}°C`);
    return celsius;
}
