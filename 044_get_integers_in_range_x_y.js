function printrange(x, y) {
    if (x + 1 >= y) {
        return;
    }
    console.log(x + 1)
    printrange(x + 1, y)
}

printrange(2, 9)