//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
//check guess
var guess = Number(stringGuess);
if (guess === secretNumber) {
  alert("You got it");
}
// otherwise, you got it wrong


//check if guess is higher or lower
else if (guess > secretNumber){
  alert("Too high");
}
else {
  alert("Too low");
}



