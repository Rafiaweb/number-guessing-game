let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#Subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
if (isNaN(guess)) {
    alert("Please enter a valid number");
}else if (guess < 1) {
    alert("Please enter a number more than 1");
}else if (guess > 100) {
    alert("Please enter a number less than 100");
}else {
    prevGuesses.push(guess);
    if (numGuesses === 11) {
        displayGuess(guess)
displayMessage(`Game Over! The number was ${randomNumber}`);
endGame();
}else {
    displayGuess(guess);
    checkGuess(guess);
}
}
}

function checkGuess(guess) {
if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed it right!`);
    endGame();
}else if (guess < randomNumber) {
    displayMessage("Too low! Try again.");
}else if (guess > randomNumber) {
    displayMessage("Too high! Try again.");
}
}

function displayGuess(guess) {
userInput.value = "";
guessSlot.innerHTML += `${guess},    `;
numGuesses++;
remaining.innerHTML = `${11 - numGuesses} `;
}
function displayMessage(message) {
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<button id="newGame" class="btn">Start New Game</button>`;
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuesses = 1;
guessSlot.innerHTML = "";
remaining.innerHTML = `${11 - numGuesses} `;
userInput.removeAttribute("disabled");
startOver.removeChild(p);
       
playGame = true;

    });
}

