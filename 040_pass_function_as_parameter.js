function sayHello(name) {
    return "Hello, " + name + "!";
}

function greetUser(callback) {
    const message = callback("Shashwat");
    console.log(message);
}

greetUser(sayHello); 