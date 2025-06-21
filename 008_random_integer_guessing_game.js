function guessNumber(number){
    const numberToGuess = Math.floor(Math.random() * 10) + 1;
    if(number === numberToGuess){
        console.log(`Congratulations! You guessed the number ${numberToGuess} correctly!`);
    }
    else{
        console.log("wrong number")
    }
    return
}
console.log(guessNumber(3))

// random give a decimal mnumber so we multile by 10 and add 1 to get a number between 1 and 10 and we add +1 so that it will not go 0-9 but 1-10
