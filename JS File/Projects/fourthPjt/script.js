
// 📌 1. Variable Declaration with let, const
// - let allows reassignment (used for randomNumber, numGuess, etc.)
// - const is used when values won’t change (DOM elements, etc.)

// 📌 2. DOM Selection using document.querySelector()
// - Selects HTML elements by ID or class
// Example: document.querySelector('#subt') selects the submit button

// 📌 3. Event Listeners
// - You used .addEventListener('click', callback) to handle button clicks
// - Prevent default form behavior using e.preventDefault()

// 📌 4. Input Handling
// - Getting value from an input field with .value
// - Converting string input to number using parseInt()

// 📌 5. Conditional Logic with if/else
// - To validate input and compare guesses to the target number

// 📌 6. Error Handling
// - Used isNaN() to check for invalid input
// - Displayed error messages using alert() and custom UI

// 📌 7. Arrays and .push()
// - Stored all previous guesses in an array prevGuess

// 📌 8. String Interpolation
// - Used template literals: `You guessed ${guess}`

// 📌 9. DOM Manipulation
// - Modified HTML content using .innerHTML
// - Disabled and re-enabled input using .setAttribute() and .removeAttribute()
// - Created elements using document.createElement() and added them with .appendChild()

// 📌 10. Game State Control
// - Used flags like playGame to track if the game is active
// - Reset the state using the newGame() function

// 📌 11. Function Organization
// - Broke your code into modular functions: validateGuess(), displayGuess(), etc.
// - Each function has a clear responsibility

// 📌 12. Minor Bugs/Debugging
// - Understood errors like "assignment to constant variable" and fixed them by switching const to let
// - Spelling and naming consistency (massage → message, cheakGuess → checkGuess)


let randomNumber = parseInt(Math.round(Math.random() * 100 + 1));
const sublmit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userguesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

//previous Guess should be shownd
let prevGuess = [];

//innitial Starting Value and when it hits 10 no more submit will be accpted
let numGuess = 1;

// which allow to play game suppose it coin ends or event ends then it will not move on the game
let playGame = true;

if (playGame) {
  sublmit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // -1 / 0 / avobe 500 values are not allowed this function will validate that part
  if (isNaN(guess)) alert('please enter a valid number');
  else if (guess < 1) alert(`Please Enter a Valid number more than 1`);
  else if (guess > 100) {
    alert(`Please Enter a Valid number within 100`);
  }
  prevGuess.push(guess);
  if (numGuess === 11) {
    displayGuess(guess);
    displayMassage(`Game Over . Random number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    cheakGuess(guess);
  }
}

function cheakGuess(guess) {
  // value = random num if low or high then show that
  if (guess === randomNumber) {
    displayMassage(`Congratualtion!! You Guess the Right Number `);
    endgame();
  } else if (guess < randomNumber) {
    displayMassage(`Number is Too Low `);
  } else if (guess > randomNumber) {
    displayMassage(`Number is to high`);
  }
}

// clean up the guesses
function displayGuess(guess) {
  //clean the value  . update pre gess and remaning guess
userInput.value = ` `;// clean up
userguesses.innerHTML +=  `${guess} , `
numGuess++;
lastResult.innerHTML =  `${11-numGuess}`


}

function displayMassage(massage) {
  //user input value will get empty . inner html part change and Displaying part

  lowOrHi.innerHTML = `<h2>${massage}</h2>`
}
function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '') // end the game
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> New Game </h2>`
  StartOver.appendChild(p)
  playGame=false
  newGame()
}
function newGame(){
  let newgamebtn = document.querySelector(`#newGame`)
  newgamebtn.addEventListener('click', function(e){
    randomNumber = parseInt(Math.round(Math.random() * 100 + 1));
    prevGuess = []
    numGuess = 1
    userguesses.innerHTML = ''
    lastResult.innerHTML =  `${11-numGuess}`
    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)

    playGame = true
  })
}
