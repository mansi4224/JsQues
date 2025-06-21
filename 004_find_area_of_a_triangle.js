function areaOfTriangle(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number') {
        throw new Error('Both base and height must be numbers');
    }
    return (base * height) / 2;
}

areaOfTriangle(5,6,7); // returns 25
