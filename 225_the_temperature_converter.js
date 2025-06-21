function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
}

celsiusToFahrenheit(25);   // 25°C is 77.0°F
celsiusToFahrenheit(0);    // 0°C is 32.0°F
celsiusToFahrenheit(-10);  // -10°C is 14.0°F

fahrenheitToCelsius(77);   // 77°F is 25.0°C
fahrenheitToCelsius(32);   // 32°F is 0.0°C
fahrenheitToCelsius(14);   // 14°F is -10.0°C
